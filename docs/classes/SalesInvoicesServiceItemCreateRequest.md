[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceItemCreateRequest

# Class: SalesInvoicesServiceItemCreateRequest

Describes the parameters required to add an item to a sales invoice

**`Generated`**

from message Scailo.SalesInvoicesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\>

  ↳ **`SalesInvoicesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceItemCreateRequest.md#constructor)

### Properties

- [clientFamilyCode](SalesInvoicesServiceItemCreateRequest.md#clientfamilycode)
- [clientQuantity](SalesInvoicesServiceItemCreateRequest.md#clientquantity)
- [clientUomId](SalesInvoicesServiceItemCreateRequest.md#clientuomid)
- [familyId](SalesInvoicesServiceItemCreateRequest.md#familyid)
- [internalQuantity](SalesInvoicesServiceItemCreateRequest.md#internalquantity)
- [roundOff](SalesInvoicesServiceItemCreateRequest.md#roundoff)
- [salesInvoiceId](SalesInvoicesServiceItemCreateRequest.md#salesinvoiceid)
- [specifications](SalesInvoicesServiceItemCreateRequest.md#specifications)
- [taxGroupId](SalesInvoicesServiceItemCreateRequest.md#taxgroupid)
- [unitPrice](SalesInvoicesServiceItemCreateRequest.md#unitprice)
- [userComment](SalesInvoicesServiceItemCreateRequest.md#usercomment)
- [fields](SalesInvoicesServiceItemCreateRequest.md#fields)
- [runtime](SalesInvoicesServiceItemCreateRequest.md#runtime)
- [typeName](SalesInvoicesServiceItemCreateRequest.md#typename)

### Methods

- [clone](SalesInvoicesServiceItemCreateRequest.md#clone)
- [equals](SalesInvoicesServiceItemCreateRequest.md#equals)
- [fromBinary](SalesInvoicesServiceItemCreateRequest.md#frombinary)
- [fromJson](SalesInvoicesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](SalesInvoicesServiceItemCreateRequest.md#fromjsonstring)
- [getType](SalesInvoicesServiceItemCreateRequest.md#gettype)
- [toBinary](SalesInvoicesServiceItemCreateRequest.md#tobinary)
- [toJSON](SalesInvoicesServiceItemCreateRequest.md#tojson)
- [toJson](SalesInvoicesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](SalesInvoicesServiceItemCreateRequest.md#tojsonstring)
- [equals](SalesInvoicesServiceItemCreateRequest.md#equals-1)
- [fromBinary](SalesInvoicesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](SalesInvoicesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceItemCreateRequest**(`data?`): [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\> |

#### Returns

[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;SalesInvoicesServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:946

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

The family code as represented by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

src/sales_invoices.scailo_pb.ts:916

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

src/sales_invoices.scailo_pb.ts:909

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/sales_invoices.scailo_pb.ts:902

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/sales_invoices.scailo_pb.ts:888

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being supplied in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/sales_invoices.scailo_pb.ts:895

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

src/sales_invoices.scailo_pb.ts:937

___

### salesInvoiceId

• **salesInvoiceId**: `bigint` = `protoInt64.zero`

Stores the sales invoice ID

**`Generated`**

from field: uint64 sales_invoice_id = 10;

#### Defined in

src/sales_invoices.scailo_pb.ts:881

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

src/sales_invoices.scailo_pb.ts:944

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

src/sales_invoices.scailo_pb.ts:930

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied to the client)

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

src/sales_invoices.scailo_pb.ts:923

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:874

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:953

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:951

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceItemCreateRequest"``

#### Defined in

src/sales_invoices.scailo_pb.ts:952

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:979

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:967

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:971

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:975
