[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceMultipleItemsSingleton

# Class: VendorInvoicesServiceMultipleItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a vendor invoice

**`Generated`**

from message Scailo.VendorInvoicesServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)\>

  ↳ **`VendorInvoicesServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceMultipleItemsSingleton.md#constructor)

### Properties

- [familyId](VendorInvoicesServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](VendorInvoicesServiceMultipleItemsSingleton.md#internalquantity)
- [roundOff](VendorInvoicesServiceMultipleItemsSingleton.md#roundoff)
- [specifications](VendorInvoicesServiceMultipleItemsSingleton.md#specifications)
- [taxGroupId](VendorInvoicesServiceMultipleItemsSingleton.md#taxgroupid)
- [vendorQuantity](VendorInvoicesServiceMultipleItemsSingleton.md#vendorquantity)
- [vendorUnitPrice](VendorInvoicesServiceMultipleItemsSingleton.md#vendorunitprice)
- [vendorUomId](VendorInvoicesServiceMultipleItemsSingleton.md#vendoruomid)
- [fields](VendorInvoicesServiceMultipleItemsSingleton.md#fields)
- [runtime](VendorInvoicesServiceMultipleItemsSingleton.md#runtime)
- [typeName](VendorInvoicesServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](VendorInvoicesServiceMultipleItemsSingleton.md#clone)
- [equals](VendorInvoicesServiceMultipleItemsSingleton.md#equals)
- [fromBinary](VendorInvoicesServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](VendorInvoicesServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](VendorInvoicesServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](VendorInvoicesServiceMultipleItemsSingleton.md#gettype)
- [toBinary](VendorInvoicesServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](VendorInvoicesServiceMultipleItemsSingleton.md#tojson)
- [toJson](VendorInvoicesServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](VendorInvoicesServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](VendorInvoicesServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](VendorInvoicesServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](VendorInvoicesServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceMultipleItemsSingleton**(`data?`): [`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)\> |

#### Returns

[`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;VendorInvoicesServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1066](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1066)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1015)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1022](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1022)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1057](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1057)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 18;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1064](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1064)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1050](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1050)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1036](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1036)

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1043](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1043)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1029](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1029)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1073](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1073)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1071](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1071)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceMultipleItemsSingleton"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1072](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1072)

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1096](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1096)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1084](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1084)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1088)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1092](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/vendor_invoices.scailo_pb.ts#L1092)
