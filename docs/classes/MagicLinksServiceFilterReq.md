[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MagicLinksServiceFilterReq

# Class: MagicLinksServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.MagicLinksServiceFilterReq

## Hierarchy

- `Message`\<[`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)\>

  ↳ **`MagicLinksServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](MagicLinksServiceFilterReq.md#constructor)

### Properties

- [count](MagicLinksServiceFilterReq.md#count)
- [creationTimestampEnd](MagicLinksServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](MagicLinksServiceFilterReq.md#creationtimestampstart)
- [entityUuid](MagicLinksServiceFilterReq.md#entityuuid)
- [expiresAtEnd](MagicLinksServiceFilterReq.md#expiresatend)
- [expiresAtStart](MagicLinksServiceFilterReq.md#expiresatstart)
- [isActive](MagicLinksServiceFilterReq.md#isactive)
- [modificationTimestampEnd](MagicLinksServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](MagicLinksServiceFilterReq.md#modificationtimestampstart)
- [offset](MagicLinksServiceFilterReq.md#offset)
- [resourceType](MagicLinksServiceFilterReq.md#resourcetype)
- [resourceUuid](MagicLinksServiceFilterReq.md#resourceuuid)
- [sortKey](MagicLinksServiceFilterReq.md#sortkey)
- [sortOrder](MagicLinksServiceFilterReq.md#sortorder)
- [fields](MagicLinksServiceFilterReq.md#fields)
- [runtime](MagicLinksServiceFilterReq.md#runtime)
- [typeName](MagicLinksServiceFilterReq.md#typename)

### Methods

- [clone](MagicLinksServiceFilterReq.md#clone)
- [equals](MagicLinksServiceFilterReq.md#equals)
- [fromBinary](MagicLinksServiceFilterReq.md#frombinary)
- [fromJson](MagicLinksServiceFilterReq.md#fromjson)
- [fromJsonString](MagicLinksServiceFilterReq.md#fromjsonstring)
- [getType](MagicLinksServiceFilterReq.md#gettype)
- [toBinary](MagicLinksServiceFilterReq.md#tobinary)
- [toJSON](MagicLinksServiceFilterReq.md#tojson)
- [toJson](MagicLinksServiceFilterReq.md#tojson-1)
- [toJsonString](MagicLinksServiceFilterReq.md#tojsonstring)
- [equals](MagicLinksServiceFilterReq.md#equals-1)
- [fromBinary](MagicLinksServiceFilterReq.md#frombinary-1)
- [fromJson](MagicLinksServiceFilterReq.md#fromjson-1)
- [fromJsonString](MagicLinksServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new MagicLinksServiceFilterReq**(`data?`): [`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)\> |

#### Returns

[`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)

#### Overrides

Message\&lt;MagicLinksServiceFilterReq\&gt;.constructor

#### Defined in

src/magic_links.scailo_pb.ts:1079

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/magic_links.scailo_pb.ts:993

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/magic_links.scailo_pb.ts:1028

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/magic_links.scailo_pb.ts:1021

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/magic_links.scailo_pb.ts:1049

___

### expiresAtEnd

• **expiresAtEnd**: `bigint` = `protoInt64.zero`

The end timestamp that needs to be considered to filter by expiry

**`Generated`**

from field: uint64 expires_at_end = 31;

#### Defined in

src/magic_links.scailo_pb.ts:1077

___

### expiresAtStart

• **expiresAtStart**: `bigint` = `protoInt64.zero`

The start timestamp that needs to be considered to filter by expiry

**`Generated`**

from field: uint64 expires_at_start = 30;

#### Defined in

src/magic_links.scailo_pb.ts:1070

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/magic_links.scailo_pb.ts:986

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/magic_links.scailo_pb.ts:1042

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/magic_links.scailo_pb.ts:1035

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/magic_links.scailo_pb.ts:1000

___

### resourceType

• **resourceType**: [`MAGIC_LINK_RESOURCE_TYPE`](../enums/MAGIC_LINK_RESOURCE_TYPE.md) = `MAGIC_LINK_RESOURCE_TYPE.MAGIC_LINK_RESOURCE_TYPE_ANY_UNSPECIFIED`

The type of the resource

**`Generated`**

from field: Scailo.MAGIC_LINK_RESOURCE_TYPE resource_type = 21;

#### Defined in

src/magic_links.scailo_pb.ts:1056

___

### resourceUuid

• **resourceUuid**: `string` = `""`

The UUID of the resource

**`Generated`**

from field: string resource_uuid = 22;

#### Defined in

src/magic_links.scailo_pb.ts:1063

___

### sortKey

• **sortKey**: [`MAGIC_LINK_SORT_KEY`](../enums/MAGIC_LINK_SORT_KEY.md) = `MAGIC_LINK_SORT_KEY.MAGIC_LINK_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.MAGIC_LINK_SORT_KEY sort_key = 5;

#### Defined in

src/magic_links.scailo_pb.ts:1014

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/magic_links.scailo_pb.ts:1007

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/magic_links.scailo_pb.ts:1086

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/magic_links.scailo_pb.ts:1084

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MagicLinksServiceFilterReq"``

#### Defined in

src/magic_links.scailo_pb.ts:1085

## Methods

### clone

▸ **clone**(): [`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)

Create a deep copy.

#### Returns

[`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md) \| `PlainMessage`\<[`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md) \| `PlainMessage`\<[`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)\> |
| `b` | `undefined` \| [`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md) \| `PlainMessage`\<[`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/magic_links.scailo_pb.ts:1115

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)

#### Defined in

src/magic_links.scailo_pb.ts:1103

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)

#### Defined in

src/magic_links.scailo_pb.ts:1107

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksServiceFilterReq`](MagicLinksServiceFilterReq.md)

#### Defined in

src/magic_links.scailo_pb.ts:1111
