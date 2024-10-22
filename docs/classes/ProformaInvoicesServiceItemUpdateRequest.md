[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceItemUpdateRequest

# Class: ProformaInvoicesServiceItemUpdateRequest

Describes the parameters required to update an item in a proforma invoice

**`Generated`**

from message Scailo.ProformaInvoicesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\>

  ↳ **`ProformaInvoicesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceItemUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](ProformaInvoicesServiceItemUpdateRequest.md#clientfamilycode)
- [clientQuantity](ProformaInvoicesServiceItemUpdateRequest.md#clientquantity)
- [clientUomId](ProformaInvoicesServiceItemUpdateRequest.md#clientuomid)
- [id](ProformaInvoicesServiceItemUpdateRequest.md#id)
- [internalQuantity](ProformaInvoicesServiceItemUpdateRequest.md#internalquantity)
- [roundOff](ProformaInvoicesServiceItemUpdateRequest.md#roundoff)
- [specifications](ProformaInvoicesServiceItemUpdateRequest.md#specifications)
- [taxGroupId](ProformaInvoicesServiceItemUpdateRequest.md#taxgroupid)
- [unitPrice](ProformaInvoicesServiceItemUpdateRequest.md#unitprice)
- [userComment](ProformaInvoicesServiceItemUpdateRequest.md#usercomment)
- [fields](ProformaInvoicesServiceItemUpdateRequest.md#fields)
- [runtime](ProformaInvoicesServiceItemUpdateRequest.md#runtime)
- [typeName](ProformaInvoicesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](ProformaInvoicesServiceItemUpdateRequest.md#clone)
- [equals](ProformaInvoicesServiceItemUpdateRequest.md#equals)
- [fromBinary](ProformaInvoicesServiceItemUpdateRequest.md#frombinary)
- [fromJson](ProformaInvoicesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](ProformaInvoicesServiceItemUpdateRequest.md#gettype)
- [toBinary](ProformaInvoicesServiceItemUpdateRequest.md#tobinary)
- [toJSON](ProformaInvoicesServiceItemUpdateRequest.md#tojson)
- [toJson](ProformaInvoicesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceItemUpdateRequest.md#tojsonstring)
- [equals](ProformaInvoicesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](ProformaInvoicesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceItemUpdateRequest**(`data?`): [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\> |

#### Returns

[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/proforma_invoices.scailo_pb.ts:1096

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

The family code as represented by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1066

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1059

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1052

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1038

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being supplied in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1045

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1087

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1094

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1080

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied to the client)

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1073

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1031

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1103

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1101

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceItemUpdateRequest"``

#### Defined in

src/proforma_invoices.scailo_pb.ts:1102

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1128

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1116

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1120

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1124
