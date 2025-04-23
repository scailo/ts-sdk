[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceItemUpdateRequest

# Class: SalesInvoicesServiceItemUpdateRequest

Describes the parameters required to update an item in a sales invoice

**`Generated`**

from message Scailo.SalesInvoicesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\>

  ↳ **`SalesInvoicesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceItemUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](SalesInvoicesServiceItemUpdateRequest.md#clientfamilycode)
- [clientQuantity](SalesInvoicesServiceItemUpdateRequest.md#clientquantity)
- [clientUomId](SalesInvoicesServiceItemUpdateRequest.md#clientuomid)
- [id](SalesInvoicesServiceItemUpdateRequest.md#id)
- [internalQuantity](SalesInvoicesServiceItemUpdateRequest.md#internalquantity)
- [roundOff](SalesInvoicesServiceItemUpdateRequest.md#roundoff)
- [specifications](SalesInvoicesServiceItemUpdateRequest.md#specifications)
- [taxGroupId](SalesInvoicesServiceItemUpdateRequest.md#taxgroupid)
- [unitPrice](SalesInvoicesServiceItemUpdateRequest.md#unitprice)
- [userComment](SalesInvoicesServiceItemUpdateRequest.md#usercomment)
- [fields](SalesInvoicesServiceItemUpdateRequest.md#fields)
- [runtime](SalesInvoicesServiceItemUpdateRequest.md#runtime)
- [typeName](SalesInvoicesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](SalesInvoicesServiceItemUpdateRequest.md#clone)
- [equals](SalesInvoicesServiceItemUpdateRequest.md#equals)
- [fromBinary](SalesInvoicesServiceItemUpdateRequest.md#frombinary)
- [fromJson](SalesInvoicesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](SalesInvoicesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](SalesInvoicesServiceItemUpdateRequest.md#gettype)
- [toBinary](SalesInvoicesServiceItemUpdateRequest.md#tobinary)
- [toJSON](SalesInvoicesServiceItemUpdateRequest.md#tojson)
- [toJson](SalesInvoicesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](SalesInvoicesServiceItemUpdateRequest.md#tojsonstring)
- [equals](SalesInvoicesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](SalesInvoicesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](SalesInvoicesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceItemUpdateRequest**(`data?`): [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\> |

#### Returns

[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;SalesInvoicesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:1088

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

The family code as represented by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

src/sales_invoices.scailo_pb.ts:1058

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

src/sales_invoices.scailo_pb.ts:1051

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/sales_invoices.scailo_pb.ts:1044

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/sales_invoices.scailo_pb.ts:1030

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being supplied in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/sales_invoices.scailo_pb.ts:1037

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

src/sales_invoices.scailo_pb.ts:1079

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

src/sales_invoices.scailo_pb.ts:1086

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

src/sales_invoices.scailo_pb.ts:1072

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied to the client)

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

src/sales_invoices.scailo_pb.ts:1065

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:1023

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:1095

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:1093

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceItemUpdateRequest"``

#### Defined in

src/sales_invoices.scailo_pb.ts:1094

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:1120

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1108

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1112

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1116
