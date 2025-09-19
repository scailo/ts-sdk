[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceSearchAllReq

# Class: ReplaceableIndentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ReplaceableIndentsServiceSearchAllReq

## Hierarchy

- `Message`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\>

  ↳ **`ReplaceableIndentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceSearchAllReq.md#constructor)

### Properties

- [count](ReplaceableIndentsServiceSearchAllReq.md#count)
- [entityUuid](ReplaceableIndentsServiceSearchAllReq.md#entityuuid)
- [familyId](ReplaceableIndentsServiceSearchAllReq.md#familyid)
- [isActive](ReplaceableIndentsServiceSearchAllReq.md#isactive)
- [itemHash](ReplaceableIndentsServiceSearchAllReq.md#itemhash)
- [locationId](ReplaceableIndentsServiceSearchAllReq.md#locationid)
- [offset](ReplaceableIndentsServiceSearchAllReq.md#offset)
- [searchKey](ReplaceableIndentsServiceSearchAllReq.md#searchkey)
- [sortKey](ReplaceableIndentsServiceSearchAllReq.md#sortkey)
- [sortOrder](ReplaceableIndentsServiceSearchAllReq.md#sortorder)
- [status](ReplaceableIndentsServiceSearchAllReq.md#status)
- [supervisor](ReplaceableIndentsServiceSearchAllReq.md#supervisor)
- [fields](ReplaceableIndentsServiceSearchAllReq.md#fields)
- [runtime](ReplaceableIndentsServiceSearchAllReq.md#runtime)
- [typeName](ReplaceableIndentsServiceSearchAllReq.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceSearchAllReq.md#clone)
- [equals](ReplaceableIndentsServiceSearchAllReq.md#equals)
- [fromBinary](ReplaceableIndentsServiceSearchAllReq.md#frombinary)
- [fromJson](ReplaceableIndentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceSearchAllReq.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceSearchAllReq.md#gettype)
- [toBinary](ReplaceableIndentsServiceSearchAllReq.md#tobinary)
- [toJSON](ReplaceableIndentsServiceSearchAllReq.md#tojson)
- [toJson](ReplaceableIndentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceSearchAllReq.md#tojsonstring)
- [equals](ReplaceableIndentsServiceSearchAllReq.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceSearchAllReq**(`data?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\> |

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Overrides

Message\&lt;ReplaceableIndentsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1725](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1725)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1653](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1653)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1681](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1681)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 25;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1716](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1716)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1646](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1646)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 26;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1723](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1723)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 23;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1702](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1702)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1660](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1660)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1695](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1695)

___

### sortKey

• **sortKey**: [`REPLACEABLE_INDENT_SORT_KEY`](../enums/REPLACEABLE_INDENT_SORT_KEY.md) = `REPLACEABLE_INDENT_SORT_KEY.REPLACEABLE_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1674](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1674)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1667](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1667)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1688](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1688)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 24;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1709](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1709)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1732](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1732)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1730](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1730)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentsServiceSearchAllReq"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1731](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1731)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1759](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1759)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1747](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1747)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1751](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1751)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1755](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1755)
