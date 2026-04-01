[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceMultipleItemsSingleton

# Class: ProformaInvoicesServiceMultipleItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a proforma invoice

**`Generated`**

from message Scailo.ProformaInvoicesServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\>

  ↳ **`ProformaInvoicesServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceMultipleItemsSingleton.md#constructor)

### Properties

- [clientFamilyCode](ProformaInvoicesServiceMultipleItemsSingleton.md#clientfamilycode)
- [clientQuantity](ProformaInvoicesServiceMultipleItemsSingleton.md#clientquantity)
- [clientUomId](ProformaInvoicesServiceMultipleItemsSingleton.md#clientuomid)
- [familyId](ProformaInvoicesServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](ProformaInvoicesServiceMultipleItemsSingleton.md#internalquantity)
- [roundOff](ProformaInvoicesServiceMultipleItemsSingleton.md#roundoff)
- [specifications](ProformaInvoicesServiceMultipleItemsSingleton.md#specifications)
- [taxGroupId](ProformaInvoicesServiceMultipleItemsSingleton.md#taxgroupid)
- [unitPrice](ProformaInvoicesServiceMultipleItemsSingleton.md#unitprice)
- [fields](ProformaInvoicesServiceMultipleItemsSingleton.md#fields)
- [runtime](ProformaInvoicesServiceMultipleItemsSingleton.md#runtime)
- [typeName](ProformaInvoicesServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](ProformaInvoicesServiceMultipleItemsSingleton.md#clone)
- [equals](ProformaInvoicesServiceMultipleItemsSingleton.md#equals)
- [fromBinary](ProformaInvoicesServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](ProformaInvoicesServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](ProformaInvoicesServiceMultipleItemsSingleton.md#gettype)
- [toBinary](ProformaInvoicesServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](ProformaInvoicesServiceMultipleItemsSingleton.md#tojson)
- [toJson](ProformaInvoicesServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](ProformaInvoicesServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](ProformaInvoicesServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceMultipleItemsSingleton**(`data?`): [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\> |

#### Returns

[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1185](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1185)

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

The family code as represented by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1155](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1155)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1148](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1148)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1141](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1141)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1127](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1127)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being supplied in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1134](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1134)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1176](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1176)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1183](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1183)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1169](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1169)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied to the client)

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1162)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1192](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1192)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1190](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1190)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceMultipleItemsSingleton"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1191](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1191)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1216](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1216)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1204](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1204)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1208](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1208)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1212](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/proforma_invoices.scailo_pb.ts#L1212)
