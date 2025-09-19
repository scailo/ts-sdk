[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServicePaginationReq

# Class: PurchasesOrdersServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.PurchasesOrdersServicePaginationReq

## Hierarchy

- `Message`\<[`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)\>

  ↳ **`PurchasesOrdersServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServicePaginationReq.md#constructor)

### Properties

- [count](PurchasesOrdersServicePaginationReq.md#count)
- [isActive](PurchasesOrdersServicePaginationReq.md#isactive)
- [offset](PurchasesOrdersServicePaginationReq.md#offset)
- [sortKey](PurchasesOrdersServicePaginationReq.md#sortkey)
- [sortOrder](PurchasesOrdersServicePaginationReq.md#sortorder)
- [status](PurchasesOrdersServicePaginationReq.md#status)
- [fields](PurchasesOrdersServicePaginationReq.md#fields)
- [runtime](PurchasesOrdersServicePaginationReq.md#runtime)
- [typeName](PurchasesOrdersServicePaginationReq.md#typename)

### Methods

- [clone](PurchasesOrdersServicePaginationReq.md#clone)
- [equals](PurchasesOrdersServicePaginationReq.md#equals)
- [fromBinary](PurchasesOrdersServicePaginationReq.md#frombinary)
- [fromJson](PurchasesOrdersServicePaginationReq.md#fromjson)
- [fromJsonString](PurchasesOrdersServicePaginationReq.md#fromjsonstring)
- [getType](PurchasesOrdersServicePaginationReq.md#gettype)
- [toBinary](PurchasesOrdersServicePaginationReq.md#tobinary)
- [toJSON](PurchasesOrdersServicePaginationReq.md#tojson)
- [toJson](PurchasesOrdersServicePaginationReq.md#tojson-1)
- [toJsonString](PurchasesOrdersServicePaginationReq.md#tojsonstring)
- [equals](PurchasesOrdersServicePaginationReq.md#equals-1)
- [fromBinary](PurchasesOrdersServicePaginationReq.md#frombinary-1)
- [fromJson](PurchasesOrdersServicePaginationReq.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServicePaginationReq**(`data?`): [`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)\> |

#### Returns

[`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)

#### Overrides

Message\&lt;PurchasesOrdersServicePaginationReq\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:1734](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1734)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1704](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1704)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1697](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1697)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1711](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1711)

___

### sortKey

• **sortKey**: [`PURCHASE_ORDER_SORT_KEY`](../enums/PURCHASE_ORDER_SORT_KEY.md) = `PURCHASE_ORDER_SORT_KEY.PURCHASE_ORDER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PURCHASE_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1725](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1725)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1718](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1718)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase order

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1732](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1732)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1741](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1741)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1739](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1739)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServicePaginationReq"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:1740](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1740)

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md) \| `PlainMessage`\<[`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md) \| `PlainMessage`\<[`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md) \| `PlainMessage`\<[`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1762](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1762)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1750](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1750)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1754](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1754)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServicePaginationReq`](PurchasesOrdersServicePaginationReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1758](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1758)
