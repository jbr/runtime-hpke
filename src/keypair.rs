#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;

use crate::Kem;
use hpke::Serializable;

cfg_if::cfg_if! {
    if #[cfg(target_arch = "wasm32")] {
        /// An encoded keypair
        #[derive(Debug, Clone, Eq, PartialEq)]
        #[wasm_bindgen]
        pub struct Keypair {
            public_key: Vec<u8>,
            private_key: Vec<u8>,
        }
    } else {
        /// An encoded keypair
        #[derive(Debug, Clone, Eq, PartialEq)]
        pub struct Keypair {
            /// the public key for this keypair
            pub public_key: Vec<u8>,
            /// the private key for this keypair,
            pub private_key: Vec<u8>,
        }
    }
}

#[cfg_attr(target_arch = "wasm32", wasm_bindgen)]
impl Keypair {
    /// generate a keypair from a [`Kem`]
    #[cfg_attr(target_arch = "wasm32", wasm_bindgen(constructor))]
    pub fn generate(kem: Kem) -> Keypair {
        gen_keypair(kem)
    }

    /// getter for public_key
    #[cfg_attr(target_arch = "wasm32", wasm_bindgen(getter))]
    pub fn public_key(&self) -> Vec<u8> {
        self.public_key.clone()
    }

    /// getter for private_key
    #[cfg_attr(target_arch = "wasm32", wasm_bindgen(getter))]
    pub fn private_key(&self) -> Vec<u8> {
        self.private_key.clone()
    }
}

impl Keypair {
    /// deconstructs the pair into (private, public)
    pub fn into_parts(self) -> (Vec<u8>, Vec<u8>) {
        (self.private_key, self.public_key)
    }
}

/// generate a Keypair for the provided asymmetric key encapsulation mechanism ([`Kem`])
pub fn gen_keypair(kem: Kem) -> Keypair {
    fn gen_kp<KemT: hpke::kem::Kem>() -> Keypair {
        let (private_key, public_key) = KemT::gen_keypair(&mut rand::thread_rng());
        let public_key = public_key.to_bytes().to_vec();
        let private_key = private_key.to_bytes().to_vec();
        Keypair {
            private_key,
            public_key,
        }
    }

    match kem {
        #[cfg(feature = "kem-dh-p256-hkdf-sha256")]
        Kem::DhP256HkdfSha256 => gen_kp::<hpke::kem::DhP256HkdfSha256>(),

        #[cfg(feature = "kem-x25519-hkdf-sha256")]
        Kem::X25519HkdfSha256 => gen_kp::<hpke::kem::X25519HkdfSha256>(),
    }
}
