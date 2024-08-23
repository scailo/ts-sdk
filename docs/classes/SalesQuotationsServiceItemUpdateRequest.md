[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceItemUpdateRequest

# Class: SalesQuotationsServiceItemUpdateRequest

Describes the parameters required to update an item in a sales quotation

**`Generated`**

from message Scailo.SalesQuotationsServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\>

  ↳ **`SalesQuotationsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceItemUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](SalesQuotationsServiceItemUpdateRequest.md#clientfamilycode)
- [clientQuantity](SalesQuotationsServiceItemUpdateRequest.md#clientquantity)
- [clientUomId](SalesQuotationsServiceItemUpdateRequest.md#clientuomid)
- [deliveryDate](SalesQuotationsServiceItemUpdateRequest.md#deliverydate)
- [discount](SalesQuotationsServiceItemUpdateRequest.md#discount)
- [id](SalesQuotationsServiceItemUpdateRequest.md#id)
- [internalQuantity](SalesQuotationsServiceItemUpdateRequest.md#internalquantity)
- [specifications](SalesQuotationsServiceItemUpdateRequest.md#specifications)
- [taxGroupId](SalesQuotationsServiceItemUpdateRequest.md#taxgroupid)
- [unitPrice](SalesQuotationsServiceItemUpdateRequest.md#unitprice)
- [userComment](SalesQuotationsServiceItemUpdateRequest.md#usercomment)
- [fields](SalesQuotationsServiceItemUpdateRequest.md#fields)
- [runtime](SalesQuotationsServiceItemUpdateRequest.md#runtime)
- [typeName](SalesQuotationsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](SalesQuotationsServiceItemUpdateRequest.md#clone)
- [equals](SalesQuotationsServiceItemUpdateRequest.md#equals)
- [fromBinary](SalesQuotationsServiceItemUpdateRequest.md#frombinary)
- [fromJson](SalesQuotationsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](SalesQuotationsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](SalesQuotationsServiceItemUpdateRequest.md#gettype)
- [toBinary](SalesQuotationsServiceItemUpdateRequest.md#tobinary)
- [toJSON](SalesQuotationsServiceItemUpdateRequest.md#tojson)
- [toJson](SalesQuotationsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](SalesQuotationsServiceItemUpdateRequest.md#tojsonstring)
- [equals](SalesQuotationsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](SalesQuotationsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](SalesQuotationsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceItemUpdateRequest**(`data?`): [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\> |

#### Returns

[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;SalesQuotationsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/sales_quotations.scailo_pb.ts:1162

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

src/sales_quotations.scailo_pb.ts:1125

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being quotationed in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

src/sales_quotations.scailo_pb.ts:1118

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

src/sales_quotations.scailo_pb.ts:1111

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

src/sales_quotations.scailo_pb.ts:1153

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

src/sales_quotations.scailo_pb.ts:1146

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/sales_quotations.scailo_pb.ts:1097

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being quotationed in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/sales_quotations.scailo_pb.ts:1104

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 21;

#### Defined in

src/sales_quotations.scailo_pb.ts:1160

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

src/sales_quotations.scailo_pb.ts:1139

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

src/sales_quotations.scailo_pb.ts:1132

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/sales_quotations.scailo_pb.ts:1090

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_quotations.scailo_pb.ts:1169

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_quotations.scailo_pb.ts:1167

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceItemUpdateRequest"``

#### Defined in

src/sales_quotations.scailo_pb.ts:1168

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_quotations.scailo_pb.ts:1195

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:1183

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:1187

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:1191
