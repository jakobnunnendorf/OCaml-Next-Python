export default function Page({
    children, // will be a page or nested layout
}) {
    return (
        <section>
            <h1 className="text-3xl">Week 5 - Javascript to React</h1>
            {children}
        </section>
    );
}
