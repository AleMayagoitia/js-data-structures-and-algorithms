/**
 * Imagine you have a 20GB file with one string per line. Explain how you would sort the file.
 */

/**
 * If the interviewer mentions a size limit of 20GB it suggests that they don't want you to bring all data into memory
 * 
 * So, we only bring part of the data into memory
 * 
 * We divide the file in chunks, where are x megabytes each, where x is the amount of memory we have available
 * Each chunk is sorted separately and then saved back to the file system
 * 
 * Once all the chunks are sorted, we merge the chunks one by one
 * At the end, we have fully sorted the file
 * 
 * This algorithm is known as external sort
 */