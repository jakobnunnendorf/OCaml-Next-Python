import fibonacci from "./fibonacci/fibonacci";

export default function Page() {
    return <pre>{fibonacci(10)}</pre>;
}
