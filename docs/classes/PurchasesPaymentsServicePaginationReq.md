[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesPaymentsServicePaginationReq

# Class: PurchasesPaymentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.PurchasesPaymentsServicePaginationReq

## Hierarchy

- `Message`\<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\>

  ↳ **`PurchasesPaymentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](PurchasesPaymentsServicePaginationReq.md#constructor)

### Properties

- [count](PurchasesPaymentsServicePaginationReq.md#count)
- [isActive](PurchasesPaymentsServicePaginationReq.md#isactive)
- [offset](PurchasesPaymentsServicePaginationReq.md#offset)
- [sortKey](PurchasesPaymentsServicePaginationReq.md#sortkey)
- [sortOrder](PurchasesPaymentsServicePaginationReq.md#sortorder)
- [status](PurchasesPaymentsServicePaginationReq.md#status)
- [fields](PurchasesPaymentsServicePaginationReq.md#fields)
- [runtime](PurchasesPaymentsServicePaginationReq.md#runtime)
- [typeName](PurchasesPaymentsServicePaginationReq.md#typename)

### Methods

- [clone](PurchasesPaymentsServicePaginationReq.md#clone)
- [equals](PurchasesPaymentsServicePaginationReq.md#equals)
- [fromBinary](PurchasesPaymentsServicePaginationReq.md#frombinary)
- [fromJson](PurchasesPaymentsServicePaginationReq.md#fromjson)
- [fromJsonString](PurchasesPaymentsServicePaginationReq.md#fromjsonstring)
- [getType](PurchasesPaymentsServicePaginationReq.md#gettype)
- [toBinary](PurchasesPaymentsServicePaginationReq.md#tobinary)
- [toJSON](PurchasesPaymentsServicePaginationReq.md#tojson)
- [toJson](PurchasesPaymentsServicePaginationReq.md#tojson-1)
- [toJsonString](PurchasesPaymentsServicePaginationReq.md#tojsonstring)
- [equals](PurchasesPaymentsServicePaginationReq.md#equals-1)
- [fromBinary](PurchasesPaymentsServicePaginationReq.md#frombinary-1)
- [fromJson](PurchasesPaymentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](PurchasesPaymentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesPaymentsServicePaginationReq**(`data?`): [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\> |

#### Returns

[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Overrides

Message\&lt;PurchasesPaymentsServicePaginationReq\&gt;.constructor

#### Defined in

[src/purchases_payments.scailo_pb.ts:712](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L712)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_payments.scailo_pb.ts:682](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L682)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/purchases_payments.scailo_pb.ts:675](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L675)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/purchases_payments.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L689)

___

### sortKey

• **sortKey**: [`PURCHASE_PAYMENT_SORT_KEY`](../enums/PURCHASE_PAYMENT_SORT_KEY.md) = `PURCHASE_PAYMENT_SORT_KEY.PURCHASE_PAYMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PURCHASE_PAYMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_payments.scailo_pb.ts:703](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L703)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_payments.scailo_pb.ts:696](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L696)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase payment

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/purchases_payments.scailo_pb.ts:710](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L710)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_payments.scailo_pb.ts:719](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L719)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_payments.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L717)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesPaymentsServicePaginationReq"``

#### Defined in

[src/purchases_payments.scailo_pb.ts:718](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L718)

## Methods

### clone

▸ **clone**(): [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md) \| `PlainMessage`\<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md) \| `PlainMessage`\<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md) \| `PlainMessage`\<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_payments.scailo_pb.ts:740](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L740)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:728](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L728)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:732](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L732)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:736](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_payments.scailo_pb.ts#L736)
