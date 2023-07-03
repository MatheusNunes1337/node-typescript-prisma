import { App } from './app'

const app = new App()

app.application.listen(3000, () => {
    console.log(`The application is running on port ${3000}`)
})