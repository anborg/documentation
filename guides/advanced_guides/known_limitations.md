# Known limitations

MeiliSearch has limitations, some of which may be addressed in future versions

## Design limitations

### Database size

Default database maximum size is 100GiB.
MeiliSearch uses LMDB under the hood as the storage engine. On launch, LMDB need to know the size that it can allocate on disk. This space will be reserved on disk for LMDB, thus MeiliSearch. This space will also be allocated as virtual memory, which is different from the real memory. You can read more [about storage](/resources/about_storage.md).
You can modify this default limit using the options `--max-mdb-size` & `--max-udb-size` as described in the [configuration guide](/guides/advanced_guides/configuration.md#max-mdb-size). 

### Number of indexes

To be completed

### Maximum words per attribute

To be completed

## Other limitations

### Payload size

To be completed
