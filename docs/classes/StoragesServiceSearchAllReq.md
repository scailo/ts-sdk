[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoragesServiceSearchAllReq

# Class: StoragesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.StoragesServiceSearchAllReq

## Hierarchy

- `Message`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\>

  ↳ **`StoragesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](StoragesServiceSearchAllReq.md#constructor)

### Properties

- [count](StoragesServiceSearchAllReq.md#count)
- [entityUuid](StoragesServiceSearchAllReq.md#entityuuid)
- [familyId](StoragesServiceSearchAllReq.md#familyid)
- [isActive](StoragesServiceSearchAllReq.md#isactive)
- [isLeaf](StoragesServiceSearchAllReq.md#isleaf)
- [offset](StoragesServiceSearchAllReq.md#offset)
- [parentStorageId](StoragesServiceSearchAllReq.md#parentstorageid)
- [searchKey](StoragesServiceSearchAllReq.md#searchkey)
- [sortKey](StoragesServiceSearchAllReq.md#sortkey)
- [sortOrder](StoragesServiceSearchAllReq.md#sortorder)
- [status](StoragesServiceSearchAllReq.md#status)
- [storeId](StoragesServiceSearchAllReq.md#storeid)
- [fields](StoragesServiceSearchAllReq.md#fields)
- [runtime](StoragesServiceSearchAllReq.md#runtime)
- [typeName](StoragesServiceSearchAllReq.md#typename)

### Methods

- [clone](StoragesServiceSearchAllReq.md#clone)
- [equals](StoragesServiceSearchAllReq.md#equals)
- [fromBinary](StoragesServiceSearchAllReq.md#frombinary)
- [fromJson](StoragesServiceSearchAllReq.md#fromjson)
- [fromJsonString](StoragesServiceSearchAllReq.md#fromjsonstring)
- [getType](StoragesServiceSearchAllReq.md#gettype)
- [toBinary](StoragesServiceSearchAllReq.md#tobinary)
- [toJSON](StoragesServiceSearchAllReq.md#tojson)
- [toJson](StoragesServiceSearchAllReq.md#tojson-1)
- [toJsonString](StoragesServiceSearchAllReq.md#tojsonstring)
- [equals](StoragesServiceSearchAllReq.md#equals-1)
- [fromBinary](StoragesServiceSearchAllReq.md#frombinary-1)
- [fromJson](StoragesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](StoragesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoragesServiceSearchAllReq**(`data?`): [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\> |

#### Returns

[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Overrides

Message\&lt;StoragesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/storages.scailo_pb.ts:1347](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1347)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/storages.scailo_pb.ts:1235](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1235)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/storages.scailo_pb.ts:1289](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1289)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Retrieve storages that are assigned to the given family ID

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/storages.scailo_pb.ts:1345](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1345)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/storages.scailo_pb.ts:1219](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1219)

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Filter with the given leaf property

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 24;

#### Defined in

[src/storages.scailo_pb.ts:1338](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1338)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/storages.scailo_pb.ts:1251](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1251)

___

### parentStorageId

• **parentStorageId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent storage (0, if the first storage that is being created is a leaf storage)

**`Generated`**

from field: uint64 parent_storage_id = 23;

#### Defined in

[src/storages.scailo_pb.ts:1331](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1331)

___

### searchKey

• **searchKey**: `string` = `""`

**`Mandatory`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/storages.scailo_pb.ts:1317](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1317)

___

### sortKey

• **sortKey**: [`STORAGE_SORT_KEY`](../enums/STORAGE_SORT_KEY.md) = `STORAGE_SORT_KEY.STORAGE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.STORAGE_SORT_KEY sort_key = 5;

#### Defined in

[src/storages.scailo_pb.ts:1273](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1273)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/storages.scailo_pb.ts:1263](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1263)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/storages.scailo_pb.ts:1301](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1301)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

The ID of the associated store

**`Generated`**

from field: uint64 store_id = 22;

#### Defined in

[src/storages.scailo_pb.ts:1324](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1324)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/storages.scailo_pb.ts:1354](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1354)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/storages.scailo_pb.ts:1352](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1352)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoragesServiceSearchAllReq"``

#### Defined in

[src/storages.scailo_pb.ts:1353](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1353)

## Methods

### clone

▸ **clone**(): [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md) \| `PlainMessage`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md) \| `PlainMessage`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md) \| `PlainMessage`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/storages.scailo_pb.ts:1381](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1381)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Defined in

[src/storages.scailo_pb.ts:1369](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1369)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Defined in

[src/storages.scailo_pb.ts:1373](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1373)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Defined in

[src/storages.scailo_pb.ts:1377](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/storages.scailo_pb.ts#L1377)
