import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeVersion3 from "@/components/home-variants/HomeVersion3";

export default function HomeV3Page() {
    return (
        <>
            <Navbar />
            <main className="flex-1">
                <HomeVersion3 />
            </main>
            <Footer />
        </>
    );
}
