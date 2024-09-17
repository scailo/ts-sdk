[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultSearchReq

# Class: VaultSearchReq

**`Generated`**

from message Scailo.VaultSearchReq

## Hierarchy

- `Message`\<[`VaultSearchReq`](VaultSearchReq.md)\>

  ↳ **`VaultSearchReq`**

## Table of contents

### Constructors

- [constructor](VaultSearchReq.md#constructor)

### Properties

- [count](VaultSearchReq.md#count)
- [creationTimestampEnd](VaultSearchReq.md#creationtimestampend)
- [creationTimestampStart](VaultSearchReq.md#creationtimestampstart)
- [entityUuid](VaultSearchReq.md#entityuuid)
- [folderUuid](VaultSearchReq.md#folderuuid)
- [isActive](VaultSearchReq.md#isactive)
- [modificationTimestampEnd](VaultSearchReq.md#modificationtimestampend)
- [modificationTimestampStart](VaultSearchReq.md#modificationtimestampstart)
- [offset](VaultSearchReq.md#offset)
- [refFor](VaultSearchReq.md#reffor)
- [searchKey](VaultSearchReq.md#searchkey)
- [sortKey](VaultSearchReq.md#sortkey)
- [sortOrder](VaultSearchReq.md#sortorder)
- [fields](VaultSearchReq.md#fields)
- [runtime](VaultSearchReq.md#runtime)
- [typeName](VaultSearchReq.md#typename)

### Methods

- [clone](VaultSearchReq.md#clone)
- [equals](VaultSearchReq.md#equals)
- [fromBinary](VaultSearchReq.md#frombinary)
- [fromJson](VaultSearchReq.md#fromjson)
- [fromJsonString](VaultSearchReq.md#fromjsonstring)
- [getType](VaultSearchReq.md#gettype)
- [toBinary](VaultSearchReq.md#tobinary)
- [toJSON](VaultSearchReq.md#tojson)
- [toJson](VaultSearchReq.md#tojson-1)
- [toJsonString](VaultSearchReq.md#tojsonstring)
- [equals](VaultSearchReq.md#equals-1)
- [fromBinary](VaultSearchReq.md#frombinary-1)
- [fromJson](VaultSearchReq.md#fromjson-1)
- [fromJsonString](VaultSearchReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultSearchReq**(`data?`): [`VaultSearchReq`](VaultSearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultSearchReq`](VaultSearchReq.md)\> |

#### Returns

[`VaultSearchReq`](VaultSearchReq.md)

#### Overrides

Message\&lt;VaultSearchReq\&gt;.constructor

#### Defined in

src/vault_commons.scailo_pb.ts:1104

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/vault_commons.scailo_pb.ts:1025

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/vault_commons.scailo_pb.ts:1060

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/vault_commons.scailo_pb.ts:1053

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/vault_commons.scailo_pb.ts:1081

___

### folderUuid

• **folderUuid**: `string` = `""`

Limit the search to an optional folder

**`Generated`**

from field: string folder_uuid = 10;

#### Defined in

src/vault_commons.scailo_pb.ts:1095

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/vault_commons.scailo_pb.ts:1018

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/vault_commons.scailo_pb.ts:1074

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/vault_commons.scailo_pb.ts:1067

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/vault_commons.scailo_pb.ts:1032

___

### refFor

• **refFor**: [`VAULT_REF_FOR`](../enums/VAULT_REF_FOR.md) = `VAULT_REF_FOR.VAULT_REF_FOR_ANY_UNSPECIFIED`

Limit the search to the given ref_for

**`Generated`**

from field: Scailo.VAULT_REF_FOR ref_for = 9;

#### Defined in

src/vault_commons.scailo_pb.ts:1088

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/vault_commons.scailo_pb.ts:1102

___

### sortKey

• **sortKey**: [`VAULT_SORT_KEY`](../enums/VAULT_SORT_KEY.md) = `VAULT_SORT_KEY.VAULT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.VAULT_SORT_KEY sort_key = 5;

#### Defined in

src/vault_commons.scailo_pb.ts:1046

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/vault_commons.scailo_pb.ts:1039

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_commons.scailo_pb.ts:1111

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_commons.scailo_pb.ts:1109

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultSearchReq"``

#### Defined in

src/vault_commons.scailo_pb.ts:1110

## Methods

### clone

▸ **clone**(): [`VaultSearchReq`](VaultSearchReq.md)

Create a deep copy.

#### Returns

[`VaultSearchReq`](VaultSearchReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultSearchReq`](VaultSearchReq.md) \| `PlainMessage`\<[`VaultSearchReq`](VaultSearchReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultSearchReq`](VaultSearchReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultSearchReq`](VaultSearchReq.md)\>

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
| `a` | `undefined` \| [`VaultSearchReq`](VaultSearchReq.md) \| `PlainMessage`\<[`VaultSearchReq`](VaultSearchReq.md)\> |
| `b` | `undefined` \| [`VaultSearchReq`](VaultSearchReq.md) \| `PlainMessage`\<[`VaultSearchReq`](VaultSearchReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_commons.scailo_pb.ts:1139

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultSearchReq`](VaultSearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultSearchReq`](VaultSearchReq.md)

#### Defined in

src/vault_commons.scailo_pb.ts:1127

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultSearchReq`](VaultSearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultSearchReq`](VaultSearchReq.md)

#### Defined in

src/vault_commons.scailo_pb.ts:1131

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultSearchReq`](VaultSearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultSearchReq`](VaultSearchReq.md)

#### Defined in

src/vault_commons.scailo_pb.ts:1135
