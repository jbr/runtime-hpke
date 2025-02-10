(function() {
    var implementors = Object.fromEntries([["base16ct",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"base16ct/struct.HexDisplay.html\" title=\"struct base16ct::HexDisplay\">HexDisplay</a>&lt;'_&gt;"]]],["crypto_bigint",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"crypto_bigint/struct.Limb.html\" title=\"struct crypto_bigint::Limb\">Limb</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"crypto_bigint/struct.NonZero.html\" title=\"struct crypto_bigint::NonZero\">NonZero</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> + <a class=\"trait\" href=\"crypto_bigint/prelude/trait.Zero.html\" title=\"trait crypto_bigint::prelude::Zero\">Zero</a>,</div>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;T&gt;"],["impl&lt;const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"crypto_bigint/struct.Uint.html\" title=\"struct crypto_bigint::Uint\">Uint</a>&lt;LIMBS&gt;"]]],["elliptic_curve",[["impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"elliptic_curve/scalar/struct.NonZeroScalar.html\" title=\"struct elliptic_curve::scalar::NonZeroScalar\">NonZeroScalar</a>&lt;C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"elliptic_curve/trait.CurveArithmetic.html\" title=\"trait elliptic_curve::CurveArithmetic\">CurveArithmetic</a>,</div>"],["impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"elliptic_curve/scalar/struct.ScalarPrimitive.html\" title=\"struct elliptic_curve::scalar::ScalarPrimitive\">ScalarPrimitive</a>&lt;C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a>,</div>"]]],["generic_array",[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/core/primitive.u8.html\">u8</a>, T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T&gt; + <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/core/primitive.u8.html\">u8</a>&gt;,\n    &lt;T as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.84.1/core/ops/arith/trait.Add.html#associatedtype.Output\" title=\"type core::ops::arith::Add::Output\">Output</a>: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/core/primitive.u8.html\">u8</a>&gt;,</div>"]]],["sec1",[["impl&lt;Size&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"sec1/point/struct.EncodedPoint.html\" title=\"struct sec1::point::EncodedPoint\">EncodedPoint</a>&lt;Size&gt;<div class=\"where\">where\n    Size: <a class=\"trait\" href=\"sec1/point/trait.ModulusSize.html\" title=\"trait sec1::point::ModulusSize\">ModulusSize</a>,</div>"]]],["winnow",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"winnow/stream/struct.Bytes.html\" title=\"struct winnow::stream::Bytes\">Bytes</a>"]]],["zerocopy",[["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I128.html\" title=\"struct zerocopy::byteorder::I128\">I128</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I16.html\" title=\"struct zerocopy::byteorder::I16\">I16</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I32.html\" title=\"struct zerocopy::byteorder::I32\">I32</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I64.html\" title=\"struct zerocopy::byteorder::I64\">I64</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U128.html\" title=\"struct zerocopy::byteorder::U128\">U128</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U16.html\" title=\"struct zerocopy::byteorder::U16\">U16</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U32.html\" title=\"struct zerocopy::byteorder::U32\">U32</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U64.html\" title=\"struct zerocopy::byteorder::U64\">U64</a>&lt;O&gt;"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[290,1684,995,1402,475,275,3333]}