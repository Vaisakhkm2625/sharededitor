
export const ssr = false;// If both `ssr` and `csr` are `false`, nothing will be rendered!

export function load({ params }) {
    return {
        docid: params.slug

    };
}
