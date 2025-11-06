[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServiceMultipleItemsSingleton

# Class: CreditNotesServiceMultipleItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a credit note

**`Generated`**

from message Scailo.CreditNotesServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)\>

  ↳ **`CreditNotesServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](CreditNotesServiceMultipleItemsSingleton.md#constructor)

### Properties

- [clientFamilyCode](CreditNotesServiceMultipleItemsSingleton.md#clientfamilycode)
- [clientQuantity](CreditNotesServiceMultipleItemsSingleton.md#clientquantity)
- [clientUomId](CreditNotesServiceMultipleItemsSingleton.md#clientuomid)
- [familyId](CreditNotesServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](CreditNotesServiceMultipleItemsSingleton.md#internalquantity)
- [roundOff](CreditNotesServiceMultipleItemsSingleton.md#roundoff)
- [specifications](CreditNotesServiceMultipleItemsSingleton.md#specifications)
- [taxGroupId](CreditNotesServiceMultipleItemsSingleton.md#taxgroupid)
- [unitPrice](CreditNotesServiceMultipleItemsSingleton.md#unitprice)
- [fields](CreditNotesServiceMultipleItemsSingleton.md#fields)
- [runtime](CreditNotesServiceMultipleItemsSingleton.md#runtime)
- [typeName](CreditNotesServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](CreditNotesServiceMultipleItemsSingleton.md#clone)
- [equals](CreditNotesServiceMultipleItemsSingleton.md#equals)
- [fromBinary](CreditNotesServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](CreditNotesServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](CreditNotesServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](CreditNotesServiceMultipleItemsSingleton.md#gettype)
- [toBinary](CreditNotesServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](CreditNotesServiceMultipleItemsSingleton.md#tojson)
- [toJson](CreditNotesServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](CreditNotesServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](CreditNotesServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](CreditNotesServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](CreditNotesServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](CreditNotesServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServiceMultipleItemsSingleton**(`data?`): [`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)\> |

#### Returns

[`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;CreditNotesServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/credit_notes.scailo_pb.ts:1009](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L1009)

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

The family code as represented by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

[src/credit_notes.scailo_pb.ts:979](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L979)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

[src/credit_notes.scailo_pb.ts:972](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L972)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

[src/credit_notes.scailo_pb.ts:965](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L965)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/credit_notes.scailo_pb.ts:951](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L951)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being supplied in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/credit_notes.scailo_pb.ts:958](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L958)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

[src/credit_notes.scailo_pb.ts:1000](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L1000)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/credit_notes.scailo_pb.ts:1007](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L1007)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

[src/credit_notes.scailo_pb.ts:993](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L993)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied to the client)

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

[src/credit_notes.scailo_pb.ts:986](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L986)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/credit_notes.scailo_pb.ts:1016](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L1016)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/credit_notes.scailo_pb.ts:1014](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L1014)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceMultipleItemsSingleton"``

#### Defined in

[src/credit_notes.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L1015)

## Methods

### clone

▸ **clone**(): [`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/credit_notes.scailo_pb.ts:1040](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L1040)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:1028](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L1028)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:1032](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L1032)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:1036](https://github.com/scailo/ts-sdk/blob/8e5d3129bcb3c3a932d1f3538f2ffcec40fdf594/src/credit_notes.scailo_pb.ts#L1036)
