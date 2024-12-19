function Navbar() {
    return (
        <nav>
            <h1>B&B Resort</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/accommodation">Accommodation</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </nav>
    );
}

function AnotherComponent() {
    return <div>Another Component</div>;
}

// ใช้ Default Export กับ Component หลัก
export default Navbar;
// ใช้ Named Export สำหรับตัวอื่น
export { AnotherComponent };
