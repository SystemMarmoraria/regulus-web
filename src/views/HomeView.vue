<template>
    <div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>


<style>
a {
    color: white;
    text-decoration: none;
}

.closeButton:hover {
    color: red
}

.overlay.visible {
    opacity: 1;
}

.image-wrapper {
    position: relative;
    display: inline-block;
}

.blackFilter:hover {
    transition: filter 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 100%;
}

.overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.overlay-text {
    position: relative;
    /* Adicione esta linha */
    z-index: 2;
    /* Adicione esta linha */
    font-size: 1.351rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.image-wrapper:hover .overlay {
    opacity: 1;
}
</style>
