[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceMultipleItemsSingleton

# Class: DebitNotesServiceMultipleItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a debit note

**`Generated`**

from message Scailo.DebitNotesServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)\>

  ↳ **`DebitNotesServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceMultipleItemsSingleton.md#constructor)

### Properties

- [familyId](DebitNotesServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](DebitNotesServiceMultipleItemsSingleton.md#internalquantity)
- [roundOff](DebitNotesServiceMultipleItemsSingleton.md#roundoff)
- [specifications](DebitNotesServiceMultipleItemsSingleton.md#specifications)
- [taxGroupId](DebitNotesServiceMultipleItemsSingleton.md#taxgroupid)
- [vendorQuantity](DebitNotesServiceMultipleItemsSingleton.md#vendorquantity)
- [vendorUnitPrice](DebitNotesServiceMultipleItemsSingleton.md#vendorunitprice)
- [vendorUomId](DebitNotesServiceMultipleItemsSingleton.md#vendoruomid)
- [fields](DebitNotesServiceMultipleItemsSingleton.md#fields)
- [runtime](DebitNotesServiceMultipleItemsSingleton.md#runtime)
- [typeName](DebitNotesServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](DebitNotesServiceMultipleItemsSingleton.md#clone)
- [equals](DebitNotesServiceMultipleItemsSingleton.md#equals)
- [fromBinary](DebitNotesServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](DebitNotesServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](DebitNotesServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](DebitNotesServiceMultipleItemsSingleton.md#gettype)
- [toBinary](DebitNotesServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](DebitNotesServiceMultipleItemsSingleton.md#tojson)
- [toJson](DebitNotesServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](DebitNotesServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](DebitNotesServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](DebitNotesServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](DebitNotesServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](DebitNotesServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceMultipleItemsSingleton**(`data?`): [`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)\> |

#### Returns

[`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;DebitNotesServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L1031)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/debit_notes.scailo_pb.ts:980](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L980)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/debit_notes.scailo_pb.ts:987](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L987)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

[src/debit_notes.scailo_pb.ts:1022](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L1022)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 18;

#### Defined in

[src/debit_notes.scailo_pb.ts:1029](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L1029)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

[src/debit_notes.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L1015)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

[src/debit_notes.scailo_pb.ts:1001](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L1001)

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

[src/debit_notes.scailo_pb.ts:1008](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L1008)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

[src/debit_notes.scailo_pb.ts:994](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L994)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:1038](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L1038)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:1036](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L1036)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceMultipleItemsSingleton"``

#### Defined in

[src/debit_notes.scailo_pb.ts:1037](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L1037)

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:1061](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L1061)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1049](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L1049)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1053](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L1053)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1057](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L1057)
