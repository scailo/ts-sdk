[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServiceSearchAllReq

# Class: AssetIndentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.AssetIndentsServiceSearchAllReq

## Hierarchy

- `Message`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\>

  ↳ **`AssetIndentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServiceSearchAllReq.md#constructor)

### Properties

- [count](AssetIndentsServiceSearchAllReq.md#count)
- [entityUuid](AssetIndentsServiceSearchAllReq.md#entityuuid)
- [isActive](AssetIndentsServiceSearchAllReq.md#isactive)
- [locationId](AssetIndentsServiceSearchAllReq.md#locationid)
- [offset](AssetIndentsServiceSearchAllReq.md#offset)
- [searchKey](AssetIndentsServiceSearchAllReq.md#searchkey)
- [sortKey](AssetIndentsServiceSearchAllReq.md#sortkey)
- [sortOrder](AssetIndentsServiceSearchAllReq.md#sortorder)
- [status](AssetIndentsServiceSearchAllReq.md#status)
- [userId](AssetIndentsServiceSearchAllReq.md#userid)
- [fields](AssetIndentsServiceSearchAllReq.md#fields)
- [runtime](AssetIndentsServiceSearchAllReq.md#runtime)
- [typeName](AssetIndentsServiceSearchAllReq.md#typename)

### Methods

- [clone](AssetIndentsServiceSearchAllReq.md#clone)
- [equals](AssetIndentsServiceSearchAllReq.md#equals)
- [fromBinary](AssetIndentsServiceSearchAllReq.md#frombinary)
- [fromJson](AssetIndentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](AssetIndentsServiceSearchAllReq.md#fromjsonstring)
- [getType](AssetIndentsServiceSearchAllReq.md#gettype)
- [toBinary](AssetIndentsServiceSearchAllReq.md#tobinary)
- [toJSON](AssetIndentsServiceSearchAllReq.md#tojson)
- [toJson](AssetIndentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](AssetIndentsServiceSearchAllReq.md#tojsonstring)
- [equals](AssetIndentsServiceSearchAllReq.md#equals-1)
- [fromBinary](AssetIndentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](AssetIndentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](AssetIndentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServiceSearchAllReq**(`data?`): [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\> |

#### Returns

[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Overrides

Message\&lt;AssetIndentsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/asset_indents.scailo_pb.ts:1801

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/asset_indents.scailo_pb.ts:1743

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/asset_indents.scailo_pb.ts:1771

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/asset_indents.scailo_pb.ts:1736

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

src/asset_indents.scailo_pb.ts:1792

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/asset_indents.scailo_pb.ts:1750

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/asset_indents.scailo_pb.ts:1785

___

### sortKey

• **sortKey**: [`ASSET_INDENT_SORT_KEY`](../enums/ASSET_INDENT_SORT_KEY.md) = `ASSET_INDENT_SORT_KEY.ASSET_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ASSET_INDENT_SORT_KEY sort_key = 5;

#### Defined in

src/asset_indents.scailo_pb.ts:1764

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/asset_indents.scailo_pb.ts:1757

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/asset_indents.scailo_pb.ts:1778

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the associated user

**`Generated`**

from field: uint64 user_id = 25;

#### Defined in

src/asset_indents.scailo_pb.ts:1799

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/asset_indents.scailo_pb.ts:1808

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/asset_indents.scailo_pb.ts:1806

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentsServiceSearchAllReq"``

#### Defined in

src/asset_indents.scailo_pb.ts:1807

## Methods

### clone

▸ **clone**(): [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/asset_indents.scailo_pb.ts:1833

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Defined in

src/asset_indents.scailo_pb.ts:1821

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Defined in

src/asset_indents.scailo_pb.ts:1825

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Defined in

src/asset_indents.scailo_pb.ts:1829
