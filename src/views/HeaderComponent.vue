<template>
        <header class="rf-header">
            <div class="rf-container">
                <div class="rf-header__body">
                    <div class="rf-header__brand">
                        <a class="rf-logo"
                            href="/"
                            title="République française">
                            <span class="rf-logo__title">
                            République
                            <br>française
                            </span>
                        </a>
                    </div>
                    <div class="rf-header__navbar">
                        <div class="rf-service">
                            <a class="rf-service__title" href="/" title="<%= appName %>">
                            heidi.data.gouv.fr
                            </a>
                            <p class="rf-service__tagline">
                            <i>Pour la publication de données de qualité</i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

<script>
import ClientOnly from 'vue-client-only';

export default {
  components: {
    ClientOnly,
  },
};
</script>
