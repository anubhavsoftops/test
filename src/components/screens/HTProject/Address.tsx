import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  styled,
} from "@material-ui/core";
import React, { Component } from "react";
import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CartNavBar from "./CartNavBar";

export default class Address extends Component {
  render() {
    return (
      <>
        {/* Address Page  */}
        <Box>
          <Container maxWidth="lg">
            <CartNavBar />
            <FormContainer>
              <OrderDetailsBox>
                <OrderSummaryBox>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="35"
                    width="35"
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <path
                      d="M50.4488 5.04609C50.4488 5.40156 50.4488 5.75156 50.4488 6.10703C50.4488 7.06953 50.4488 8.03203 50.4488 8.99453C50.4488 10.4164 50.4488 11.8383 50.4488 13.2602C50.4488 14.9938 50.4488 16.7273 50.4488 18.4609C50.4488 20.3586 50.4488 22.2563 50.4488 24.1539C50.4488 26.068 50.4488 27.982 50.4488 29.8961C50.4488 31.6789 50.4488 33.4563 50.4488 35.2391C50.4488 36.7375 50.4488 38.2359 50.4488 39.7344C50.4488 40.8063 50.4488 41.8727 50.4488 42.9445C50.4488 43.4367 50.4488 43.9289 50.4488 44.4211C50.4488 44.5359 50.4433 44.6563 50.4324 44.7711C50.4543 44.6234 50.4707 44.4813 50.4926 44.3336C50.4597 44.5523 50.4051 44.7602 50.3176 44.968C50.3722 44.8367 50.4269 44.7055 50.4816 44.5742C50.4215 44.7055 50.3504 44.8258 50.2738 44.9516C50.1426 45.1648 50.5144 44.6891 50.3832 44.8203C50.334 44.8695 50.2902 44.9297 50.241 44.9789C50.1973 45.0227 50.1535 45.0609 50.1097 45.0992C49.9129 45.2906 50.4543 44.8805 50.2137 45.0172C50.0879 45.0883 49.9676 45.1648 49.8363 45.225C49.9676 45.1703 50.0988 45.1156 50.2301 45.0609C50.0277 45.1484 49.8144 45.2031 49.5957 45.2359C49.7433 45.2141 49.8855 45.1977 50.0332 45.1758C49.623 45.2195 49.2019 45.1922 48.7972 45.1922C47.9769 45.1922 47.1566 45.1922 46.3363 45.1922C44.4332 45.1922 42.5301 45.1922 40.6215 45.1922C40.1785 45.1922 39.7355 45.1922 39.298 45.1922C39.7683 46.0125 40.2441 46.8383 40.7144 47.6586C42.9074 43.8852 43.3668 39.1109 41.7644 35.0258C40.3973 31.5367 37.7887 28.5672 34.3707 26.9648C30.8652 25.3242 26.7691 25.0234 23.1051 26.3523C19.5941 27.6266 16.5808 30.1859 14.8965 33.5383C13.9996 35.3266 13.4746 37.2352 13.3269 39.2367C13.1465 41.632 13.6222 44.0164 14.5683 46.2094C14.7816 46.707 15.0277 47.1883 15.2957 47.6531C15.766 46.8328 16.2418 46.007 16.7121 45.1867C15.509 45.1867 14.3058 45.1867 13.1082 45.1867C11.2215 45.1867 9.34022 45.1867 7.4535 45.1867C6.96678 45.1867 6.45819 45.2195 5.97147 45.1703C6.11912 45.1922 6.26131 45.2086 6.40897 45.2305C6.19022 45.1977 5.98241 45.143 5.77459 45.0555C5.90584 45.1102 6.03709 45.1648 6.16834 45.2195C6.03709 45.1594 5.91678 45.0883 5.791 45.0117C5.57772 44.8805 6.0535 45.2523 5.92225 45.1211C5.87303 45.0719 5.81287 45.0281 5.76366 44.9789C5.71991 44.9352 5.68162 44.8914 5.64334 44.8477C5.45194 44.6508 5.86209 45.1922 5.72537 44.9516C5.65428 44.8258 5.57772 44.7055 5.51756 44.5742C5.57225 44.7055 5.62694 44.8367 5.68162 44.968C5.59412 44.7602 5.53944 44.5523 5.50662 44.3336C5.5285 44.4813 5.54491 44.6234 5.56678 44.7711C5.51756 44.3445 5.55037 43.9016 5.55037 43.475C5.55037 42.5234 5.55037 41.5774 5.55037 40.6258C5.55037 39.2148 5.55037 37.8039 5.55037 36.393C5.55037 34.6594 5.55037 32.9203 5.55037 31.1867C5.55037 29.2836 5.55037 27.375 5.55037 25.4719C5.55037 23.5469 5.55037 21.6273 5.55037 19.7023C5.55037 17.9086 5.55037 16.1203 5.55037 14.3266C5.55037 12.8227 5.55037 11.3242 5.55037 9.82031C5.55037 8.74297 5.55037 7.66563 5.55037 6.58281C5.55037 6.08516 5.55037 5.59297 5.55037 5.09531C5.55037 4.98047 5.55584 4.86016 5.56678 4.74531C5.54491 4.89297 5.5285 5.03516 5.50662 5.18281C5.53944 4.96406 5.59412 4.75625 5.68162 4.54844C5.62694 4.67969 5.57225 4.81094 5.51756 4.94219C5.57772 4.81094 5.64881 4.69063 5.72537 4.56484C5.85662 4.35156 5.48475 4.82734 5.616 4.69609C5.66522 4.64688 5.70897 4.58672 5.75819 4.5375C5.80194 4.49375 5.84569 4.45547 5.88944 4.41719C6.08631 4.22578 5.54491 4.63594 5.78553 4.49922C5.91131 4.42813 6.03162 4.35156 6.16287 4.29141C6.03162 4.34609 5.90037 4.40078 5.76912 4.45547C5.97147 4.36797 6.18475 4.31328 6.4035 4.28047C6.25584 4.30234 6.11366 4.31875 5.966 4.34063C6.42537 4.29141 6.90115 4.32422 7.366 4.32422C8.416 4.32422 9.466 4.32422 10.516 4.32422C12.0746 4.32422 13.6332 4.32422 15.1972 4.32422C17.1058 4.32422 19.0144 4.32422 20.923 4.32422C23.0285 4.32422 25.1285 4.32422 27.234 4.32422C29.3504 4.32422 31.4613 4.32422 33.5777 4.32422C35.5465 4.32422 37.5152 4.32422 39.484 4.32422C41.1465 4.32422 42.8035 4.32422 44.466 4.32422C45.6527 4.32422 46.8394 4.32422 48.0262 4.32422C48.573 4.32422 49.1254 4.32422 49.6722 4.32422C49.7926 4.32422 49.9074 4.32969 50.0277 4.34063C49.8801 4.31875 49.7379 4.30234 49.5902 4.28047C49.809 4.31328 50.0168 4.36797 50.2246 4.45547C50.0933 4.40078 49.9621 4.34609 49.8308 4.29141C49.9621 4.35156 50.0824 4.42266 50.2082 4.49922C50.4215 4.63047 49.9457 4.25859 50.0769 4.38984C50.1262 4.43906 50.1863 4.48281 50.2355 4.53203C50.2793 4.57578 50.3176 4.61953 50.3558 4.66328C50.5472 4.86016 50.1371 4.31875 50.2738 4.55938C50.3449 4.68516 50.4215 4.80547 50.4816 4.93672C50.4269 4.80547 50.3722 4.67422 50.3176 4.54297C50.4051 4.74531 50.4597 4.95859 50.4926 5.17734C50.4707 5.02969 50.4543 4.8875 50.4324 4.73984C50.4379 4.84922 50.4433 4.94766 50.4488 5.04609C50.4598 5.90469 51.1926 6.725 52.0894 6.68672C52.9644 6.64844 53.7465 5.96484 53.7301 5.04609C53.6973 2.84766 51.9254 1.07031 49.7215 1.04297C49.5519 1.04297 49.3824 1.04297 49.2183 1.04297C48.2012 1.04297 47.1785 1.04297 46.1613 1.04297C44.4441 1.04297 42.7269 1.04297 41.0098 1.04297C38.8223 1.04297 36.6402 1.04297 34.4527 1.04297C32.0465 1.04297 29.6457 1.04297 27.2394 1.04297C24.8605 1.04297 22.4816 1.04297 20.1027 1.04297C17.9918 1.04297 15.8863 1.04297 13.7754 1.04297C12.184 1.04297 10.5926 1.04297 9.00662 1.04297C8.16444 1.04297 7.32772 1.04297 6.48553 1.04297C5.72537 1.04297 4.99256 1.18516 4.31991 1.55156C3.01834 2.2625 2.27459 3.67344 2.26912 5.12813C2.26912 5.88828 2.26912 6.64844 2.26912 7.40859C2.26912 9.01094 2.26912 10.6188 2.26912 12.2211C2.26912 14.3703 2.26912 16.525 2.26912 18.6742C2.26912 21.0695 2.26912 23.4594 2.26912 25.8547C2.26912 28.2117 2.26912 30.5688 2.26912 32.9258C2.26912 34.9438 2.26912 36.9563 2.26912 38.9742C2.26912 40.3523 2.26912 41.7359 2.26912 43.1141C2.26912 43.9781 2.18162 44.957 2.49334 45.7773C2.95272 46.9859 3.86053 47.8992 5.10194 48.2984C5.53397 48.4406 5.99881 48.4734 6.45272 48.4734C7.18553 48.4734 7.92381 48.4734 8.65662 48.4734C10.8933 48.4734 13.1246 48.4734 15.3613 48.4734C15.8097 48.4734 16.2582 48.4734 16.7066 48.4734C17.9535 48.4734 18.7465 47.0789 18.123 46.007C17.8441 45.5258 17.5926 45.0281 17.3738 44.5195C17.4285 44.6508 17.4832 44.782 17.5379 44.9133C17.084 43.8359 16.7777 42.7094 16.6191 41.5555C16.641 41.7031 16.6574 41.8453 16.6793 41.993C16.5262 40.8336 16.5262 39.6578 16.6793 38.4984C16.6574 38.6461 16.641 38.7883 16.6191 38.9359C16.7777 37.793 17.0785 36.6719 17.5269 35.6055C17.4722 35.7367 17.4176 35.868 17.3629 35.9992C17.6144 35.4031 17.9097 34.8234 18.2488 34.2656C18.4183 33.9922 18.5933 33.7188 18.7847 33.4563C18.834 33.3906 18.8832 33.3195 18.9324 33.2539C18.9543 33.2266 18.9762 33.1992 18.998 33.1664C19.091 33.0352 18.8449 33.3852 18.8504 33.3578C18.8777 33.2375 19.0855 33.068 19.1676 32.9695C19.5832 32.4773 20.0316 32.018 20.5183 31.5914C20.6332 31.4875 20.7535 31.3891 20.8738 31.2906C20.9394 31.2359 21.0051 31.1867 21.0707 31.132C21.2566 30.9789 20.7316 31.3836 20.9941 31.1922C21.2512 31.0008 21.5191 30.8148 21.7871 30.6398C22.416 30.2352 23.0777 29.8906 23.7613 29.6008C23.6301 29.6555 23.4988 29.7102 23.3676 29.7648C24.434 29.3164 25.5496 29.0156 26.698 28.857C26.5504 28.8789 26.4082 28.8953 26.2605 28.9172C27.4199 28.7641 28.5902 28.7641 29.7496 28.9172C29.6019 28.8953 29.4597 28.8789 29.3121 28.857C30.4551 29.0156 31.5762 29.3164 32.6426 29.7648C32.5113 29.7102 32.3801 29.6555 32.2488 29.6008C32.8449 29.8523 33.4246 30.1477 33.9824 30.4867C34.2558 30.6563 34.5293 30.8313 34.7918 31.0227C34.8574 31.0719 34.9285 31.1211 34.9941 31.1703C35.0215 31.1922 35.0488 31.2141 35.0816 31.2359C35.2129 31.3289 34.8629 31.0828 34.8902 31.0883C35.0105 31.1156 35.1801 31.3234 35.2785 31.4055C35.7707 31.8211 36.2301 32.2695 36.6566 32.7563C36.7605 32.8711 36.859 32.9914 36.9574 33.1117C37.0121 33.1773 37.0613 33.243 37.116 33.3086C37.2691 33.4945 36.8644 32.9695 37.0558 33.232C37.2472 33.4891 37.4332 33.757 37.6082 34.025C38.0129 34.6539 38.3574 35.3156 38.6473 35.9992C38.5926 35.868 38.5379 35.7367 38.4832 35.6055C38.9316 36.6719 39.2324 37.7875 39.391 38.9359C39.3691 38.7883 39.3527 38.6461 39.3308 38.4984C39.484 39.6578 39.4785 40.8281 39.3308 41.993C39.3527 41.8453 39.3691 41.7031 39.391 41.5555C39.2324 42.7148 38.9262 43.8359 38.4722 44.9133C38.5269 44.782 38.5816 44.6508 38.6363 44.5195C38.4176 45.0281 38.166 45.5258 37.8871 46.007C37.2637 47.0844 38.0566 48.4734 39.3035 48.4734C40.9715 48.4734 42.634 48.4734 44.3019 48.4734C46.1066 48.4734 47.9058 48.4898 49.7105 48.4734C51.9199 48.4516 53.7137 46.6852 53.741 44.4703C53.741 44.2953 53.741 44.1203 53.741 43.9453C53.741 42.7914 53.741 41.643 53.741 40.4891C53.741 38.5477 53.741 36.6063 53.741 34.6703C53.741 32.275 53.741 29.8797 53.741 27.4844C53.741 24.9633 53.741 22.4367 53.741 19.9156C53.741 17.6078 53.741 15.3 53.741 12.9922C53.741 11.2422 53.741 9.49766 53.741 7.74766C53.741 6.88359 53.741 6.025 53.741 5.16094C53.741 5.12266 53.741 5.08438 53.741 5.04609C53.741 4.1875 52.9863 3.36719 52.1004 3.40547C51.198 3.44922 50.4488 4.12734 50.4488 5.04609Z"
                      fill="#252729"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M32.4356 2.68488C32.4356 4.36926 32.4356 6.05363 32.4356 7.73801C32.4356 10.4013 32.4356 13.0646 32.4356 15.7279C32.4356 16.3404 32.4356 16.9583 32.4356 17.5708C33.2559 17.1005 34.0817 16.6247 34.902 16.1544C33.1083 15.2138 31.32 14.2786 29.5263 13.338C29.2966 13.2177 29.0614 13.0864 28.8263 12.9716C28.2302 12.6818 27.6724 12.7091 27.0981 13.0044C26.9778 13.07 26.852 13.1302 26.7317 13.1958C25.6981 13.7372 24.6591 14.2786 23.6255 14.8255C22.7833 15.2685 21.9356 15.7114 21.0935 16.1544C21.9138 16.6247 22.7395 17.1005 23.5599 17.5708C23.5599 15.8864 23.5599 14.2021 23.5599 12.5177C23.5599 9.85441 23.5599 7.19113 23.5599 4.52785C23.5599 3.91535 23.5599 3.29738 23.5599 2.68488C23.013 3.23176 22.4661 3.77863 21.9192 4.32551C23.2919 4.32551 24.6645 4.32551 26.0372 4.32551C28.2138 4.32551 30.3903 4.32551 32.5669 4.32551C33.07 4.32551 33.5731 4.32551 34.0708 4.32551C34.9294 4.32551 35.7497 3.57082 35.7114 2.68488C35.6731 1.79348 34.9895 1.04426 34.0708 1.04426C32.6981 1.04426 31.3255 1.04426 29.9528 1.04426C27.7763 1.04426 25.5997 1.04426 23.4231 1.04426C22.92 1.04426 22.4169 1.04426 21.9192 1.04426C21.0333 1.04426 20.2786 1.79348 20.2786 2.68488C20.2786 4.36926 20.2786 6.05363 20.2786 7.73801C20.2786 10.4013 20.2786 13.0646 20.2786 15.7279C20.2786 16.3404 20.2786 16.9583 20.2786 17.5708C20.2786 18.856 21.6622 19.556 22.745 18.9872C24.5169 18.0575 26.2833 17.1333 28.0552 16.2036C28.3122 16.0724 28.5638 15.9357 28.8208 15.8044C28.2684 15.8044 27.7161 15.8044 27.1638 15.8044C28.9356 16.7341 30.702 17.6583 32.4739 18.588C32.7309 18.7193 32.9825 18.856 33.2395 18.9872C34.3278 19.556 35.7059 18.856 35.7059 17.5708C35.7059 15.8864 35.7059 14.2021 35.7059 12.5177C35.7059 9.85441 35.7059 7.19113 35.7059 4.52785C35.7059 3.91535 35.7059 3.29738 35.7059 2.68488C35.7059 1.82629 34.9513 1.00598 34.0653 1.04426C33.1849 1.08801 32.4356 1.76613 32.4356 2.68488ZM39.4356 40.2388C39.4356 40.8239 39.3974 41.4091 39.3208 41.9888C39.3427 41.8411 39.3591 41.6989 39.3809 41.5513C39.2224 42.7107 38.9161 43.8318 38.4622 44.9091C38.5169 44.7779 38.5716 44.6466 38.6263 44.5154C38.2708 45.3411 37.8388 46.1286 37.3247 46.8669C37.2208 47.02 37.1059 47.1622 37.002 47.3154C37.3192 46.8669 37.095 47.195 37.013 47.2935C36.9474 47.3755 36.8817 47.4575 36.8106 47.5341C36.5536 47.8349 36.2856 48.1247 36.0067 48.3982C35.7278 48.6716 35.4325 48.9396 35.1263 49.1857C35.0442 49.2513 34.9622 49.3169 34.8802 49.3825C35.3067 49.0325 35.0005 49.2896 34.8966 49.3661C34.7489 49.4755 34.5958 49.5794 34.4427 49.6833C33.7591 50.1427 33.0372 50.531 32.2825 50.8536C32.4138 50.7989 32.545 50.7443 32.6763 50.6896C31.6044 51.1435 30.4778 51.4497 29.3239 51.6083C29.4716 51.5864 29.6138 51.57 29.7614 51.5482C28.5966 51.7013 27.4208 51.7013 26.2559 51.5482C26.4036 51.57 26.5458 51.5864 26.6934 51.6083C25.5395 51.4497 24.413 51.1435 23.3411 50.6896C23.4724 50.7443 23.6036 50.7989 23.7349 50.8536C22.9802 50.531 22.2528 50.1427 21.5747 49.6833C21.4216 49.5794 21.2685 49.4755 21.1208 49.3661C21.0224 49.2896 20.7106 49.0325 21.1372 49.3825C21.0552 49.3169 20.9731 49.2513 20.8911 49.1857C20.5849 48.9341 20.295 48.6716 20.0106 48.3982C19.7317 48.1247 19.4638 47.8349 19.2067 47.5341C19.1411 47.4521 19.07 47.3755 19.0044 47.2935C18.9224 47.195 18.6981 46.8669 19.0153 47.3154C18.9114 47.1677 18.7966 47.02 18.6927 46.8669C18.1786 46.1286 17.7466 45.3411 17.3911 44.5154C17.4458 44.6466 17.5005 44.7779 17.5552 44.9091C17.1013 43.8318 16.795 42.7052 16.6364 41.5513C16.6583 41.6989 16.6747 41.8411 16.6966 41.9888C16.5434 40.8294 16.5434 39.6536 16.6966 38.4943C16.6747 38.6419 16.6583 38.7841 16.6364 38.9318C16.795 37.7888 17.0958 36.6677 17.5442 35.6013C17.4895 35.7325 17.4349 35.8638 17.3802 35.995C17.6317 35.3989 17.927 34.8193 18.2661 34.2614C18.4356 33.988 18.6106 33.7146 18.802 33.4521C18.8513 33.3864 18.9005 33.3154 18.9497 33.2497C18.9716 33.2224 18.9935 33.195 19.0153 33.1622C19.1083 33.031 18.8622 33.381 18.8677 33.3536C18.895 33.2333 19.1028 33.0638 19.1849 32.9654C19.6005 32.4732 20.0489 32.0138 20.5356 31.5872C20.6505 31.4833 20.7708 31.3849 20.8911 31.2864C20.9567 31.2318 21.0224 31.1825 21.088 31.1279C21.2739 30.9747 20.7489 31.3794 21.0114 31.188C21.2685 30.9966 21.5364 30.8107 21.8044 30.6357C22.4333 30.231 23.095 29.8864 23.7786 29.5966C23.6474 29.6513 23.5161 29.706 23.3849 29.7607C24.4513 29.3122 25.5669 29.0114 26.7153 28.8529C26.5677 28.8747 26.4255 28.8911 26.2778 28.913C27.4372 28.7599 28.6075 28.7599 29.7669 28.913C29.6192 28.8911 29.477 28.8747 29.3294 28.8529C30.4724 29.0114 31.5935 29.3122 32.6599 29.7607C32.5286 29.706 32.3974 29.6513 32.2661 29.5966C32.8622 29.8482 33.4419 30.1435 33.9997 30.4825C34.2731 30.6521 34.5466 30.8271 34.8091 31.0185C34.8747 31.0677 34.9458 31.1169 35.0114 31.1661C35.0388 31.188 35.0661 31.2099 35.0989 31.2318C35.2302 31.3247 34.8802 31.0786 34.9075 31.0841C35.0278 31.1114 35.1974 31.3193 35.2958 31.4013C35.788 31.8169 36.2474 32.2654 36.6739 32.7521C36.7778 32.8669 36.8763 32.9872 36.9747 33.1075C37.0294 33.1732 37.0786 33.2388 37.1333 33.3044C37.2864 33.4904 36.8817 32.9654 37.0731 33.2279C37.2645 33.4849 37.4505 33.7528 37.6255 34.0208C38.0302 34.6497 38.3747 35.3114 38.6645 35.995C38.6099 35.8638 38.5552 35.7325 38.5005 35.6013C38.9489 36.6677 39.2497 37.7833 39.4083 38.9318C39.3864 38.7841 39.37 38.6419 39.3481 38.4943C39.3974 39.0739 39.4356 39.6536 39.4356 40.2388C39.4356 41.0974 40.1903 41.9177 41.0763 41.8794C41.9622 41.8411 42.7169 41.1575 42.7169 40.2388C42.7114 37.4388 41.9075 34.6224 40.3763 32.2708C38.8833 29.9849 36.7614 28.0654 34.2677 26.9279C32.9989 26.3482 31.681 25.9107 30.2919 25.7138C28.706 25.4896 27.1802 25.4896 25.5997 25.7302C22.8599 26.1404 20.295 27.431 18.2224 29.2466C16.1661 31.0513 14.6458 33.4794 13.8747 36.1044C12.9669 39.1833 13.0927 42.6396 14.3067 45.6146C14.952 47.2005 15.8052 48.6224 16.9208 49.9239C17.8888 51.0505 19.0645 52.0239 20.3333 52.806C22.9474 54.4138 26.1192 55.1794 29.1763 54.906C32.3645 54.6216 35.3286 53.3693 37.7458 51.2638C40.152 49.1693 41.8692 46.1833 42.4434 43.0443C42.613 42.12 42.7114 41.1849 42.7169 40.2443C42.7224 39.3857 41.9622 38.5654 41.0763 38.6036C40.1849 38.6364 39.4356 39.3146 39.4356 40.2388Z"
                      fill="#252729"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M20.1435 42.1003C21.363 43.3198 22.5826 44.5393 23.8021 45.7589C23.9771 45.9339 24.1521 46.1089 24.3216 46.2784C24.9505 46.9073 26.0115 46.9073 26.6404 46.2784C27.6193 45.2995 28.5927 44.3261 29.5716 43.3472C31.1302 41.7886 32.6833 40.2354 34.2419 38.6768C34.5974 38.3214 34.9529 37.9659 35.3138 37.605C35.9208 36.9979 35.9646 35.8823 35.3138 35.2862C34.6576 34.6847 33.6404 34.6354 32.9951 35.2862C32.0162 36.2651 31.0427 37.2386 30.0638 38.2175C28.5052 39.7761 26.9521 41.3292 25.3935 42.8878C25.038 43.2432 24.6826 43.5987 24.3216 43.9597C25.0927 43.9597 25.8693 43.9597 26.6404 43.9597C25.4208 42.7401 24.2013 41.5206 22.9818 40.3011C22.8068 40.1261 22.6318 39.9511 22.4623 39.7815C21.8552 39.1745 20.7396 39.1307 20.1435 39.7815C19.5419 40.4378 19.4982 41.4495 20.1435 42.1003Z"
                      fill="#252729"
                      fill-opacity="0.8"
                    />
                  </svg>
                  <SummaryBox>
                    <OrderDetailsTxtBox>
                      <OrderContentTxt>Order Details</OrderContentTxt>
                      <OrderContentTxt>Total Quantity : </OrderContentTxt>
                    </OrderDetailsTxtBox>
                    <TotalQuantityTxt>
                      <CustomTickIcon />
                      <OrderContentTxt>23 Total products</OrderContentTxt>
                    </TotalQuantityTxt>
                  </SummaryBox>
                </OrderSummaryBox>
                <StatusTxt>COMPLETED</StatusTxt>
              </OrderDetailsBox>
              <hr />
              <OrderDetailsBox>
                <OrderSummaryBox>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <path
                      d="M23.3933 35.2426C23.3933 31.8681 22.7496 28.5432 21.5164 25.5484C21.2952 25.0224 21.0332 24.5254 20.7342 24.0646H10.0977V24.7632C11.5491 27.9685 12.3136 31.5538 12.3136 35.2426H31.1491M42.2288 42.2288H22.2853M41.1208 36.6398V29.6536C41.1208 29.6536 37.7969 26.8591 32.2571 26.8591C30.0278 26.8591 28.1576 27.3118 26.7172 27.8539M31.9247 21.2701C31.9247 21.2701 28.3792 18.4756 28.3792 14.9824C28.3792 13.6869 28.7873 12.4445 29.5137 11.5284C30.2401 10.6123 31.2253 10.0977 32.2526 10.0977C33.2799 10.0977 34.2652 10.6123 34.9916 11.5284C35.718 12.4445 36.1261 13.6869 36.1261 14.9824C36.1261 18.4756 32.5895 21.2701 32.5895 21.2701H31.9247Z"
                      stroke="#252729"
                      stroke-width="3"
                    />
                    <rect
                      x="1.5"
                      y="1.5"
                      width="53"
                      height="53"
                      rx="8.5"
                      stroke="#252729"
                      stroke-width="3"
                    />
                  </svg>
                  <SummaryBox>
                    <OrderDetailsTxtBox>
                      <OrderContentTxt>
                        Interior Designer Referral
                      </OrderContentTxt>
                      <OrderContentTxt>Designer ID </OrderContentTxt>
                    </OrderDetailsTxtBox>
                    <TotalQuantityTxt>
                      <CustomTickIcon />
                      <OrderContentTxt></OrderContentTxt>
                    </TotalQuantityTxt>
                  </SummaryBox>
                </OrderSummaryBox>
                <StatusTxt>COMPLETED</StatusTxt>
              </OrderDetailsBox>
              <hr />
              <AddressBox>
                <AddressBoxTxt>Shipping Address</AddressBoxTxt>

                <MultiAddressBox>
                  <CustomAddressInput required label="Last Name" />
                  <CustomAddressInput required label="Phone No" />
                </MultiAddressBox>
                <MultiAddressBox>
                  <CustomAddressInput required label="City" />
                  <CustomAddressInput required label="Country" />
                  <CustomAddressInput required label="Pin Code" />
                </MultiAddressBox>
                <MultiAddressBox>
                  <CustomFullAddressInput
                    required
                    label="Billing Address"
                    fullWidth
                  />
                </MultiAddressBox>
                <MultiAddressBox>
                  <CustomFullAddressInput
                    required
                    label="Shipping Address"
                    fullWidth
                  />
                </MultiAddressBox>
                <AddressFormBtn type="submit">Make Payment</AddressFormBtn>
              </AddressBox>
            </FormContainer>
          </Container>
        </Box>
      </>
    );
  }
}

const FormContainer = styled(Container)({
  "&.MuiContainer-root": {
    padding: " 0 50px",
  },
});
const OrderDetailsBox = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  padding: "20px 0",
  alignItems: "center",
  "@media (max-width:425px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
const OrderSummaryBox = styled(Box)({
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
});
const SummaryBox = styled(Box)({
  display: "flex",
  flexBasis: "250px",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginLeft: "15px",
  "@media (max-width:425px)": {
    flexBasis: "350px",
    justifyContent: "space-between",
  },
});
const OrderDetailsTxtBox = styled(Box)({});
const TotalQuantityTxt = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});
const OrderContentTxt = styled(Typography)({
  fontSize: "1rem",
  fontFamily: "Raleway",
});
const CustomTickIcon = styled(CheckIcon)({
  height: "18px",
  width: "18px",
  marginTop: "5px",
  marginRight: "10px",
});
const StatusTxt = styled(Typography)({
  fontSize: "1rem",
  textDecoration: "underline",
  cursor: "pointer",
  fontFamily: "Raleway",
  "@media (max-width:425px)": {
    marginTop: "10px",
    textAlign: "right",
  },
});
// ------------ address form boxs -------------
const AddressBox = styled("form")({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  marginTop: "2rem",
  flexDirection: "column",
  alignItems: "center",
});
const AddressBoxTxt = styled(Typography)({
  fontSize: "1.5rem",
  fontFamily: "Raleway",
  // fontWeight: "bold",
  marginBottom: "1rem",
});
const MultiAddressBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "70rem",
  marginBottom: "25px",
  "@media (max-width:1170px)": {
    width: "45rem",
  },
  "@media (max-width:768px)": {
    width: "80%",
    flexDirection: "column",
    marginBottom: "0",
  },
});
const CustomAddressInput = styled(TextField)({
  width: "20rem",
  "& .MuiInputBase-input": {
    padding: "4px 0",
  },

  "& .MuiInputLabel-asterisk": {
    color: "#000000",
    fontSize: "16px",
    fontWeight: "lighter  ",
  },
  "& .MuiInputLabel-root": {
    color: "#000000",
    opacity: ".8",
    fontFamily: "Raleway",
    fontSize: "14px",
    fontWeight: "bold",
  },
  "@media (max-width:1170px)": {
    width: "14rem",
  },
  "@media (max-width:768px)": {
    width: "100%",
    marginBottom: "25px",
  },
});
const CustomFullAddressInput = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: "4px 0",
  },

  "& .MuiInputLabel-asterisk": {
    color: "#000000",
    fontSize: "16px",
    fontWeight: "lighter  ",
  },
  "& .MuiInputLabel-root": {
    color: "#000000",
    opacity: ".8",
    fontFamily: "Raleway",
    fontSize: "14px",
    fontWeight: "bold",
  },
  "@media (max-width:768px)": {
    width: "100%",
    marginBottom: "25px",
  },
});
const AddressFormBtn = styled(Button)({
  backgroundColor: "#a27d4d",
  textTransform: "capitalize",
  marginTop: "1rem",
  width: "18rem",
  fontWeight: "normal",
  color: "#fff",
  borderRadius: "100px",
  padding: "10px",
  marginBottom: "10px",
  "@media (max-width:576px)": {
    width: "80%",
    marginBottom: "10px",
  },
});