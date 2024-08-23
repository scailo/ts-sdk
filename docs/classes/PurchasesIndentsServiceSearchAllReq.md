[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceSearchAllReq

# Class: PurchasesIndentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.PurchasesIndentsServiceSearchAllReq

## Hierarchy

- `Message`\<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\>

  ↳ **`PurchasesIndentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceSearchAllReq.md#constructor)

### Properties

- [consigneeLocationId](PurchasesIndentsServiceSearchAllReq.md#consigneelocationid)
- [count](PurchasesIndentsServiceSearchAllReq.md#count)
- [entityUuid](PurchasesIndentsServiceSearchAllReq.md#entityuuid)
- [isActive](PurchasesIndentsServiceSearchAllReq.md#isactive)
- [offset](PurchasesIndentsServiceSearchAllReq.md#offset)
- [searchKey](PurchasesIndentsServiceSearchAllReq.md#searchkey)
- [sortKey](PurchasesIndentsServiceSearchAllReq.md#sortkey)
- [sortOrder](PurchasesIndentsServiceSearchAllReq.md#sortorder)
- [status](PurchasesIndentsServiceSearchAllReq.md#status)
- [fields](PurchasesIndentsServiceSearchAllReq.md#fields)
- [runtime](PurchasesIndentsServiceSearchAllReq.md#runtime)
- [typeName](PurchasesIndentsServiceSearchAllReq.md#typename)

### Methods

- [clone](PurchasesIndentsServiceSearchAllReq.md#clone)
- [equals](PurchasesIndentsServiceSearchAllReq.md#equals)
- [fromBinary](PurchasesIndentsServiceSearchAllReq.md#frombinary)
- [fromJson](PurchasesIndentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceSearchAllReq.md#fromjsonstring)
- [getType](PurchasesIndentsServiceSearchAllReq.md#gettype)
- [toBinary](PurchasesIndentsServiceSearchAllReq.md#tobinary)
- [toJSON](PurchasesIndentsServiceSearchAllReq.md#tojson)
- [toJson](PurchasesIndentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceSearchAllReq.md#tojsonstring)
- [equals](PurchasesIndentsServiceSearchAllReq.md#equals-1)
- [fromBinary](PurchasesIndentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceSearchAllReq**(`data?`): [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\> |

#### Returns

[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Overrides

Message\&lt;PurchasesIndentsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/purchases_indents.scailo_pb.ts:1780

## Properties

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 consignee_location_id = 20;

#### Defined in

src/purchases_indents.scailo_pb.ts:1778

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/purchases_indents.scailo_pb.ts:1729

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/purchases_indents.scailo_pb.ts:1757

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/purchases_indents.scailo_pb.ts:1722

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/purchases_indents.scailo_pb.ts:1736

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/purchases_indents.scailo_pb.ts:1771

___

### sortKey

• **sortKey**: [`PURCHASE_INDENT_SORT_KEY`](../enums/PURCHASE_INDENT_SORT_KEY.md) = `PURCHASE_INDENT_SORT_KEY.PURCHASE_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PURCHASE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

src/purchases_indents.scailo_pb.ts:1750

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/purchases_indents.scailo_pb.ts:1743

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/purchases_indents.scailo_pb.ts:1764

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_indents.scailo_pb.ts:1787

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_indents.scailo_pb.ts:1785

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsServiceSearchAllReq"``

#### Defined in

src/purchases_indents.scailo_pb.ts:1786

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_indents.scailo_pb.ts:1811

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:1799

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:1803

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:1807
