[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServicePaginationReq

# Class: VendorInvoicesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.VendorInvoicesServicePaginationReq

## Hierarchy

- `Message`\<[`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)\>

  ↳ **`VendorInvoicesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServicePaginationReq.md#constructor)

### Properties

- [count](VendorInvoicesServicePaginationReq.md#count)
- [isActive](VendorInvoicesServicePaginationReq.md#isactive)
- [offset](VendorInvoicesServicePaginationReq.md#offset)
- [sortKey](VendorInvoicesServicePaginationReq.md#sortkey)
- [sortOrder](VendorInvoicesServicePaginationReq.md#sortorder)
- [status](VendorInvoicesServicePaginationReq.md#status)
- [fields](VendorInvoicesServicePaginationReq.md#fields)
- [runtime](VendorInvoicesServicePaginationReq.md#runtime)
- [typeName](VendorInvoicesServicePaginationReq.md#typename)

### Methods

- [clone](VendorInvoicesServicePaginationReq.md#clone)
- [equals](VendorInvoicesServicePaginationReq.md#equals)
- [fromBinary](VendorInvoicesServicePaginationReq.md#frombinary)
- [fromJson](VendorInvoicesServicePaginationReq.md#fromjson)
- [fromJsonString](VendorInvoicesServicePaginationReq.md#fromjsonstring)
- [getType](VendorInvoicesServicePaginationReq.md#gettype)
- [toBinary](VendorInvoicesServicePaginationReq.md#tobinary)
- [toJSON](VendorInvoicesServicePaginationReq.md#tojson)
- [toJson](VendorInvoicesServicePaginationReq.md#tojson-1)
- [toJsonString](VendorInvoicesServicePaginationReq.md#tojsonstring)
- [equals](VendorInvoicesServicePaginationReq.md#equals-1)
- [fromBinary](VendorInvoicesServicePaginationReq.md#frombinary-1)
- [fromJson](VendorInvoicesServicePaginationReq.md#fromjson-1)
- [fromJsonString](VendorInvoicesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServicePaginationReq**(`data?`): [`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)\> |

#### Returns

[`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)

#### Overrides

Message\&lt;VendorInvoicesServicePaginationReq\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:1538

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1508

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1501

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1515

___

### sortKey

• **sortKey**: [`VENDOR_INVOICE_SORT_KEY`](../enums/VENDOR_INVOICE_SORT_KEY.md) = `VENDOR_INVOICE_SORT_KEY.VENDOR_INVOICE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.VENDOR_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1529

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1522

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this vendor invoice

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1536

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1545

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1543

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServicePaginationReq"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:1544

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md) \| `PlainMessage`\<[`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md) \| `PlainMessage`\<[`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md) \| `PlainMessage`\<[`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1566

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1554

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1558

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServicePaginationReq`](VendorInvoicesServicePaginationReq.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1562
