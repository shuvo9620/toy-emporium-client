

const Map = () => {

    return (
        <section className="py-16 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">Visit Our Store</h2>
                <div className=" w-1/2 mx-auto">
                    <div>
                        <iframe
                            title="Toy Emporium Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6518173143855!2d-71.06822048441495!3d42.36212057915064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377902a90a369%3A0x67949f18ec86af0c!2s123%20Main%20St%2C%20Boston%2C%20MA%2002114%2C%20USA!5e0!3m2!1sen!2suk!4v1620169031054!5m2!1sen!2suk"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;