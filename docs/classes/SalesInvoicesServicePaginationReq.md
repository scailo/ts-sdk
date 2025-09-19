[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServicePaginationReq

# Class: SalesInvoicesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.SalesInvoicesServicePaginationReq

## Hierarchy

- `Message`\<[`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)\>

  ↳ **`SalesInvoicesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServicePaginationReq.md#constructor)

### Properties

- [count](SalesInvoicesServicePaginationReq.md#count)
- [isActive](SalesInvoicesServicePaginationReq.md#isactive)
- [offset](SalesInvoicesServicePaginationReq.md#offset)
- [sortKey](SalesInvoicesServicePaginationReq.md#sortkey)
- [sortOrder](SalesInvoicesServicePaginationReq.md#sortorder)
- [status](SalesInvoicesServicePaginationReq.md#status)
- [fields](SalesInvoicesServicePaginationReq.md#fields)
- [runtime](SalesInvoicesServicePaginationReq.md#runtime)
- [typeName](SalesInvoicesServicePaginationReq.md#typename)

### Methods

- [clone](SalesInvoicesServicePaginationReq.md#clone)
- [equals](SalesInvoicesServicePaginationReq.md#equals)
- [fromBinary](SalesInvoicesServicePaginationReq.md#frombinary)
- [fromJson](SalesInvoicesServicePaginationReq.md#fromjson)
- [fromJsonString](SalesInvoicesServicePaginationReq.md#fromjsonstring)
- [getType](SalesInvoicesServicePaginationReq.md#gettype)
- [toBinary](SalesInvoicesServicePaginationReq.md#tobinary)
- [toJSON](SalesInvoicesServicePaginationReq.md#tojson)
- [toJson](SalesInvoicesServicePaginationReq.md#tojson-1)
- [toJsonString](SalesInvoicesServicePaginationReq.md#tojsonstring)
- [equals](SalesInvoicesServicePaginationReq.md#equals-1)
- [fromBinary](SalesInvoicesServicePaginationReq.md#frombinary-1)
- [fromJson](SalesInvoicesServicePaginationReq.md#fromjson-1)
- [fromJsonString](SalesInvoicesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServicePaginationReq**(`data?`): [`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)\> |

#### Returns

[`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)

#### Overrides

Message\&lt;SalesInvoicesServicePaginationReq\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:1570](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1570)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1540](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1540)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1533](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1533)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1547](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1547)

___

### sortKey

• **sortKey**: [`SALES_INVOICE_SORT_KEY`](../enums/SALES_INVOICE_SORT_KEY.md) = `SALES_INVOICE_SORT_KEY.SALES_INVOICE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALES_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1561](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1561)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1554](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1554)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this sales invoice

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1568](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1568)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1577](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1577)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1575](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1575)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServicePaginationReq"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:1576](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1576)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md) \| `PlainMessage`\<[`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md) \| `PlainMessage`\<[`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md) \| `PlainMessage`\<[`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1598](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1598)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1586](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1586)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1590](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1590)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServicePaginationReq`](SalesInvoicesServicePaginationReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1594](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L1594)
