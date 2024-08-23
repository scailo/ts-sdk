[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / StoragesServiceSearchAllReq

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

src/storages.scailo_pb.ts:1032

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/storages.scailo_pb.ts:960

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/storages.scailo_pb.ts:988

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Retrieve storages that are assigned to the given family ID

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

src/storages.scailo_pb.ts:1030

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/storages.scailo_pb.ts:953

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Filter with the given leaf property

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 24;

#### Defined in

src/storages.scailo_pb.ts:1023

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/storages.scailo_pb.ts:967

___

### parentStorageId

• **parentStorageId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent storage (0, if the first storage that is being created is a leaf storage)

**`Generated`**

from field: uint64 parent_storage_id = 23;

#### Defined in

src/storages.scailo_pb.ts:1016

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/storages.scailo_pb.ts:1002

___

### sortKey

• **sortKey**: [`STORAGE_SORT_KEY`](../enums/STORAGE_SORT_KEY.md) = `STORAGE_SORT_KEY.STORAGE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.STORAGE_SORT_KEY sort_key = 5;

#### Defined in

src/storages.scailo_pb.ts:981

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/storages.scailo_pb.ts:974

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/storages.scailo_pb.ts:995

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

The ID of the associated store

**`Generated`**

from field: uint64 store_id = 22;

#### Defined in

src/storages.scailo_pb.ts:1009

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/storages.scailo_pb.ts:1039

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/storages.scailo_pb.ts:1037

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoragesServiceSearchAllReq"``

#### Defined in

src/storages.scailo_pb.ts:1038

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

src/storages.scailo_pb.ts:1066

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

src/storages.scailo_pb.ts:1054

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

src/storages.scailo_pb.ts:1058

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

src/storages.scailo_pb.ts:1062
