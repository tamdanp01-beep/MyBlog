function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[#cdbda9] bg-[#e7d8c3]">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-[#74665b] sm:flex-row sm:items-center sm:justify-between">
                <p>© {currentYear} Tam Dan Pham</p>

                <div className="flex gap-5">
                    <a className="hover:text-[#d96c2c]" href="#">
                        GitHub
                    </a>

                    <a className="hover:text-[#d96c2c]" href="#">
                        LinkedIn
                    </a>

                    <a className="hover:text-[#d96c2c]" href="mailto:your@email.com">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;