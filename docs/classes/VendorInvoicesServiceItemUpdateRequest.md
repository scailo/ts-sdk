[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceItemUpdateRequest

# Class: VendorInvoicesServiceItemUpdateRequest

Describes the parameters required to update an item in a vendor invoice

**`Generated`**

from message Scailo.VendorInvoicesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)\>

  ↳ **`VendorInvoicesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceItemUpdateRequest.md#constructor)

### Properties

- [id](VendorInvoicesServiceItemUpdateRequest.md#id)
- [internalQuantity](VendorInvoicesServiceItemUpdateRequest.md#internalquantity)
- [roundOff](VendorInvoicesServiceItemUpdateRequest.md#roundoff)
- [specifications](VendorInvoicesServiceItemUpdateRequest.md#specifications)
- [taxGroupId](VendorInvoicesServiceItemUpdateRequest.md#taxgroupid)
- [userComment](VendorInvoicesServiceItemUpdateRequest.md#usercomment)
- [vendorQuantity](VendorInvoicesServiceItemUpdateRequest.md#vendorquantity)
- [vendorUnitPrice](VendorInvoicesServiceItemUpdateRequest.md#vendorunitprice)
- [vendorUomId](VendorInvoicesServiceItemUpdateRequest.md#vendoruomid)
- [fields](VendorInvoicesServiceItemUpdateRequest.md#fields)
- [runtime](VendorInvoicesServiceItemUpdateRequest.md#runtime)
- [typeName](VendorInvoicesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](VendorInvoicesServiceItemUpdateRequest.md#clone)
- [equals](VendorInvoicesServiceItemUpdateRequest.md#equals)
- [fromBinary](VendorInvoicesServiceItemUpdateRequest.md#frombinary)
- [fromJson](VendorInvoicesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](VendorInvoicesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](VendorInvoicesServiceItemUpdateRequest.md#gettype)
- [toBinary](VendorInvoicesServiceItemUpdateRequest.md#tobinary)
- [toJSON](VendorInvoicesServiceItemUpdateRequest.md#tojson)
- [toJson](VendorInvoicesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](VendorInvoicesServiceItemUpdateRequest.md#tojsonstring)
- [equals](VendorInvoicesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](VendorInvoicesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](VendorInvoicesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceItemUpdateRequest**(`data?`): [`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)\> |

#### Returns

[`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;VendorInvoicesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:996

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/vendor_invoices.scailo_pb.ts:945

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/vendor_invoices.scailo_pb.ts:952

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

src/vendor_invoices.scailo_pb.ts:987

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 18;

#### Defined in

src/vendor_invoices.scailo_pb.ts:994

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

src/vendor_invoices.scailo_pb.ts:980

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:938

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

src/vendor_invoices.scailo_pb.ts:966

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

src/vendor_invoices.scailo_pb.ts:973

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

src/vendor_invoices.scailo_pb.ts:959

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1003

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1001

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceItemUpdateRequest"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:1002

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1027

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1015

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1019

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceItemUpdateRequest`](VendorInvoicesServiceItemUpdateRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1023
