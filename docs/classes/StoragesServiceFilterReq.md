[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoragesServiceFilterReq

# Class: StoragesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.StoragesServiceFilterReq

## Hierarchy

- `Message`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\>

  ↳ **`StoragesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](StoragesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](StoragesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](StoragesServiceFilterReq.md#approvedonend)
- [approvedOnStart](StoragesServiceFilterReq.md#approvedonstart)
- [approverRoleId](StoragesServiceFilterReq.md#approverroleid)
- [code](StoragesServiceFilterReq.md#code)
- [count](StoragesServiceFilterReq.md#count)
- [creationTimestampEnd](StoragesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](StoragesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](StoragesServiceFilterReq.md#entityuuid)
- [familyId](StoragesServiceFilterReq.md#familyid)
- [isActive](StoragesServiceFilterReq.md#isactive)
- [isLeaf](StoragesServiceFilterReq.md#isleaf)
- [modificationTimestampEnd](StoragesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](StoragesServiceFilterReq.md#modificationtimestampstart)
- [name](StoragesServiceFilterReq.md#name)
- [offset](StoragesServiceFilterReq.md#offset)
- [parentStorageId](StoragesServiceFilterReq.md#parentstorageid)
- [sortKey](StoragesServiceFilterReq.md#sortkey)
- [sortOrder](StoragesServiceFilterReq.md#sortorder)
- [status](StoragesServiceFilterReq.md#status)
- [storeId](StoragesServiceFilterReq.md#storeid)
- [fields](StoragesServiceFilterReq.md#fields)
- [runtime](StoragesServiceFilterReq.md#runtime)
- [typeName](StoragesServiceFilterReq.md#typename)

### Methods

- [clone](StoragesServiceFilterReq.md#clone)
- [equals](StoragesServiceFilterReq.md#equals)
- [fromBinary](StoragesServiceFilterReq.md#frombinary)
- [fromJson](StoragesServiceFilterReq.md#fromjson)
- [fromJsonString](StoragesServiceFilterReq.md#fromjsonstring)
- [getType](StoragesServiceFilterReq.md#gettype)
- [toBinary](StoragesServiceFilterReq.md#tobinary)
- [toJSON](StoragesServiceFilterReq.md#tojson)
- [toJson](StoragesServiceFilterReq.md#tojson-1)
- [toJsonString](StoragesServiceFilterReq.md#tojsonstring)
- [equals](StoragesServiceFilterReq.md#equals-1)
- [fromBinary](StoragesServiceFilterReq.md#frombinary-1)
- [fromJson](StoragesServiceFilterReq.md#fromjson-1)
- [fromJsonString](StoragesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoragesServiceFilterReq**(`data?`): [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\> |

#### Returns

[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Overrides

Message\&lt;StoragesServiceFilterReq\&gt;.constructor

#### Defined in

[src/storages.scailo_pb.ts:723](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L723)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/storages.scailo_pb.ts:672](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L672)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/storages.scailo_pb.ts:665](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L665)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/storages.scailo_pb.ts:658](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L658)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/storages.scailo_pb.ts:679](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L679)

___

### code

• **code**: `string` = `""`

The unique code by which the storage is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/storages.scailo_pb.ts:693](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L693)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/storages.scailo_pb.ts:588](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L588)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/storages.scailo_pb.ts:623](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L623)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/storages.scailo_pb.ts:616](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L616)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/storages.scailo_pb.ts:644](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L644)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Retrieve storages that are assigned to the given family ID

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/storages.scailo_pb.ts:721](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L721)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/storages.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L581)

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Filter with the given leaf property

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 24;

#### Defined in

[src/storages.scailo_pb.ts:714](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L714)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/storages.scailo_pb.ts:637](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L637)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/storages.scailo_pb.ts:630](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L630)

___

### name

• **name**: `string` = `""`

The name of the storage

**`Generated`**

from field: string name = 20;

#### Defined in

[src/storages.scailo_pb.ts:686](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L686)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/storages.scailo_pb.ts:595](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L595)

___

### parentStorageId

• **parentStorageId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent storage (0, if the first storage that is being created is a leaf storage)

**`Generated`**

from field: uint64 parent_storage_id = 23;

#### Defined in

[src/storages.scailo_pb.ts:707](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L707)

___

### sortKey

• **sortKey**: [`STORAGE_SORT_KEY`](../enums/STORAGE_SORT_KEY.md) = `STORAGE_SORT_KEY.STORAGE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.STORAGE_SORT_KEY sort_key = 5;

#### Defined in

[src/storages.scailo_pb.ts:609](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L609)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/storages.scailo_pb.ts:602](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L602)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this storage

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/storages.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L651)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

The ID of the associated store

**`Generated`**

from field: uint64 store_id = 22;

#### Defined in

[src/storages.scailo_pb.ts:700](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L700)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/storages.scailo_pb.ts:730](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L730)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/storages.scailo_pb.ts:728](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L728)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoragesServiceFilterReq"``

#### Defined in

[src/storages.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L729)

## Methods

### clone

▸ **clone**(): [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md) \| `PlainMessage`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md) \| `PlainMessage`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md) \| `PlainMessage`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/storages.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L766)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Defined in

[src/storages.scailo_pb.ts:754](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L754)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Defined in

[src/storages.scailo_pb.ts:758](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L758)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Defined in

[src/storages.scailo_pb.ts:762](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L762)
