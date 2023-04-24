
export const Container = (Component) =>
    function HOC() {
        return (
            <div
                className="
                flex
                justify-center
                my-40
                "
            >
                <Component />
            </div>
        )
    }

