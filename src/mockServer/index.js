import { createServer } from 'miragejs';

import data from 'mockServer/data.json';

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/images', () => {
            return {
                data
            };
        });

        this.get('/images/:id', (_, request) => {
            const id = request.params.id;
            const image = data.find((img) => img.id.toString() === id);

            if (image) {
                return {
                    data: image
                };
            } else {
                return new Response(
                    404,
                    { some: 'header' },
                    { errors: ['Image not found'] }
                );
            }
        });

        this.post('/images/:id/comments', (schema, request) => {
            const attrs = JSON.parse(request.requestBody);
            // console.log for backend simulation 
            console.log('Received comment:', attrs);

            return new Response(204, {}, null);
        });
    }
});
