import { startStimulusApp, registerControllers } from "vite-plugin-symfony/dist/stimulus/helpers/index";
import { registerReactControllerComponents, type ReactModule } from "vite-plugin-symfony/dist/stimulus/helpers/react/index"

// register your React components before startStimulusApp
registerReactControllerComponents(
    import.meta.glob<ReactModule>("./react/controllers/**/*.ts(x)?"),
);

const app = startStimulusApp();
registerControllers(
    app,
    import.meta.glob<StimulusControllerInfosImport>(
        "./controllers/*_controller.ts",
        {
            query: "?stimulus",
            eager: true,
        },
    ),
);