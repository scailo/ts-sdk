[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServicePaginationReq

# Class: ProformaInvoicesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.ProformaInvoicesServicePaginationReq

## Hierarchy

- `Message`\<[`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)\>

  ↳ **`ProformaInvoicesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServicePaginationReq.md#constructor)

### Properties

- [count](ProformaInvoicesServicePaginationReq.md#count)
- [isActive](ProformaInvoicesServicePaginationReq.md#isactive)
- [offset](ProformaInvoicesServicePaginationReq.md#offset)
- [sortKey](ProformaInvoicesServicePaginationReq.md#sortkey)
- [sortOrder](ProformaInvoicesServicePaginationReq.md#sortorder)
- [status](ProformaInvoicesServicePaginationReq.md#status)
- [fields](ProformaInvoicesServicePaginationReq.md#fields)
- [runtime](ProformaInvoicesServicePaginationReq.md#runtime)
- [typeName](ProformaInvoicesServicePaginationReq.md#typename)

### Methods

- [clone](ProformaInvoicesServicePaginationReq.md#clone)
- [equals](ProformaInvoicesServicePaginationReq.md#equals)
- [fromBinary](ProformaInvoicesServicePaginationReq.md#frombinary)
- [fromJson](ProformaInvoicesServicePaginationReq.md#fromjson)
- [fromJsonString](ProformaInvoicesServicePaginationReq.md#fromjsonstring)
- [getType](ProformaInvoicesServicePaginationReq.md#gettype)
- [toBinary](ProformaInvoicesServicePaginationReq.md#tobinary)
- [toJSON](ProformaInvoicesServicePaginationReq.md#tojson)
- [toJson](ProformaInvoicesServicePaginationReq.md#tojson-1)
- [toJsonString](ProformaInvoicesServicePaginationReq.md#tojsonstring)
- [equals](ProformaInvoicesServicePaginationReq.md#equals-1)
- [fromBinary](ProformaInvoicesServicePaginationReq.md#frombinary-1)
- [fromJson](ProformaInvoicesServicePaginationReq.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServicePaginationReq**(`data?`): [`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)\> |

#### Returns

[`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)

#### Overrides

Message\&lt;ProformaInvoicesServicePaginationReq\&gt;.constructor

#### Defined in

src/proforma_invoices.scailo_pb.ts:1578

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1548

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1541

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1555

___

### sortKey

• **sortKey**: [`PROFORMA_INVOICE_SORT_KEY`](../enums/PROFORMA_INVOICE_SORT_KEY.md) = `PROFORMA_INVOICE_SORT_KEY.PROFORMA_INVOICE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1569

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1562

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this proforma invoice

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1576

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1585

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1583

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServicePaginationReq"``

#### Defined in

src/proforma_invoices.scailo_pb.ts:1584

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md) \| `PlainMessage`\<[`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md) \| `PlainMessage`\<[`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md) \| `PlainMessage`\<[`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1606

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1594

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1598

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServicePaginationReq`](ProformaInvoicesServicePaginationReq.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1602
