[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoresServiceFilterReq

# Class: StoresServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.StoresServiceFilterReq

## Hierarchy

- `Message`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\>

  ↳ **`StoresServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](StoresServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](StoresServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](StoresServiceFilterReq.md#approvedonend)
- [approvedOnStart](StoresServiceFilterReq.md#approvedonstart)
- [approverRoleId](StoresServiceFilterReq.md#approverroleid)
- [code](StoresServiceFilterReq.md#code)
- [count](StoresServiceFilterReq.md#count)
- [creationTimestampEnd](StoresServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](StoresServiceFilterReq.md#creationtimestampstart)
- [entityUuid](StoresServiceFilterReq.md#entityuuid)
- [isActive](StoresServiceFilterReq.md#isactive)
- [locationId](StoresServiceFilterReq.md#locationid)
- [modificationTimestampEnd](StoresServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](StoresServiceFilterReq.md#modificationtimestampstart)
- [name](StoresServiceFilterReq.md#name)
- [offset](StoresServiceFilterReq.md#offset)
- [sortKey](StoresServiceFilterReq.md#sortkey)
- [sortOrder](StoresServiceFilterReq.md#sortorder)
- [status](StoresServiceFilterReq.md#status)
- [fields](StoresServiceFilterReq.md#fields)
- [runtime](StoresServiceFilterReq.md#runtime)
- [typeName](StoresServiceFilterReq.md#typename)

### Methods

- [clone](StoresServiceFilterReq.md#clone)
- [equals](StoresServiceFilterReq.md#equals)
- [fromBinary](StoresServiceFilterReq.md#frombinary)
- [fromJson](StoresServiceFilterReq.md#fromjson)
- [fromJsonString](StoresServiceFilterReq.md#fromjsonstring)
- [getType](StoresServiceFilterReq.md#gettype)
- [toBinary](StoresServiceFilterReq.md#tobinary)
- [toJSON](StoresServiceFilterReq.md#tojson)
- [toJson](StoresServiceFilterReq.md#tojson-1)
- [toJsonString](StoresServiceFilterReq.md#tojsonstring)
- [equals](StoresServiceFilterReq.md#equals-1)
- [fromBinary](StoresServiceFilterReq.md#frombinary-1)
- [fromJson](StoresServiceFilterReq.md#fromjson-1)
- [fromJsonString](StoresServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoresServiceFilterReq**(`data?`): [`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\> |

#### Returns

[`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Overrides

Message\&lt;StoresServiceFilterReq\&gt;.constructor

#### Defined in

[src/stores.scailo_pb.ts:726](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L726)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/stores.scailo_pb.ts:696](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L696)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/stores.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L689)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/stores.scailo_pb.ts:682](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L682)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/stores.scailo_pb.ts:703](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L703)

___

### code

• **code**: `string` = `""`

The unique code by which the store is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/stores.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L717)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/stores.scailo_pb.ts:612](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L612)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/stores.scailo_pb.ts:647](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L647)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/stores.scailo_pb.ts:640](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L640)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/stores.scailo_pb.ts:668](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L668)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/stores.scailo_pb.ts:605](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L605)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 22;

#### Defined in

[src/stores.scailo_pb.ts:724](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L724)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/stores.scailo_pb.ts:661](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L661)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/stores.scailo_pb.ts:654](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L654)

___

### name

• **name**: `string` = `""`

The name of the store

**`Generated`**

from field: string name = 20;

#### Defined in

[src/stores.scailo_pb.ts:710](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L710)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/stores.scailo_pb.ts:619](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L619)

___

### sortKey

• **sortKey**: [`STORE_SORT_KEY`](../enums/STORE_SORT_KEY.md) = `STORE_SORT_KEY.STORE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.STORE_SORT_KEY sort_key = 5;

#### Defined in

[src/stores.scailo_pb.ts:633](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L633)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/stores.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L626)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this store

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/stores.scailo_pb.ts:675](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L675)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stores.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L733)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stores.scailo_pb.ts:731](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L731)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoresServiceFilterReq"``

#### Defined in

[src/stores.scailo_pb.ts:732](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L732)

## Methods

### clone

▸ **clone**(): [`StoresServiceFilterReq`](StoresServiceFilterReq.md)

Create a deep copy.

#### Returns

[`StoresServiceFilterReq`](StoresServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StoresServiceFilterReq`](StoresServiceFilterReq.md) \| `PlainMessage`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`StoresServiceFilterReq`](StoresServiceFilterReq.md) \| `PlainMessage`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\> |
| `b` | `undefined` \| [`StoresServiceFilterReq`](StoresServiceFilterReq.md) \| `PlainMessage`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stores.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L766)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Defined in

[src/stores.scailo_pb.ts:754](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L754)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Defined in

[src/stores.scailo_pb.ts:758](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L758)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Defined in

[src/stores.scailo_pb.ts:762](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L762)
