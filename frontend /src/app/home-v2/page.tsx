import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeVersion2 from "@/components/home-variants/HomeVersion2";

export default function HomeV2Page() {
    return (
        <>
            <Navbar />
            <main className="flex-1">
                <HomeVersion2 />
            </main>
            <Footer />
        </>
    );
}
