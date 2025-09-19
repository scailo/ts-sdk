[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceItemCreateRequest

# Class: ProformaInvoicesServiceItemCreateRequest

Describes the parameters required to add an item to a proforma invoice

**`Generated`**

from message Scailo.ProformaInvoicesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\>

  ↳ **`ProformaInvoicesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceItemCreateRequest.md#constructor)

### Properties

- [clientFamilyCode](ProformaInvoicesServiceItemCreateRequest.md#clientfamilycode)
- [clientQuantity](ProformaInvoicesServiceItemCreateRequest.md#clientquantity)
- [clientUomId](ProformaInvoicesServiceItemCreateRequest.md#clientuomid)
- [familyId](ProformaInvoicesServiceItemCreateRequest.md#familyid)
- [internalQuantity](ProformaInvoicesServiceItemCreateRequest.md#internalquantity)
- [proformaInvoiceId](ProformaInvoicesServiceItemCreateRequest.md#proformainvoiceid)
- [roundOff](ProformaInvoicesServiceItemCreateRequest.md#roundoff)
- [specifications](ProformaInvoicesServiceItemCreateRequest.md#specifications)
- [taxGroupId](ProformaInvoicesServiceItemCreateRequest.md#taxgroupid)
- [unitPrice](ProformaInvoicesServiceItemCreateRequest.md#unitprice)
- [userComment](ProformaInvoicesServiceItemCreateRequest.md#usercomment)
- [fields](ProformaInvoicesServiceItemCreateRequest.md#fields)
- [runtime](ProformaInvoicesServiceItemCreateRequest.md#runtime)
- [typeName](ProformaInvoicesServiceItemCreateRequest.md#typename)

### Methods

- [clone](ProformaInvoicesServiceItemCreateRequest.md#clone)
- [equals](ProformaInvoicesServiceItemCreateRequest.md#equals)
- [fromBinary](ProformaInvoicesServiceItemCreateRequest.md#frombinary)
- [fromJson](ProformaInvoicesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceItemCreateRequest.md#fromjsonstring)
- [getType](ProformaInvoicesServiceItemCreateRequest.md#gettype)
- [toBinary](ProformaInvoicesServiceItemCreateRequest.md#tobinary)
- [toJSON](ProformaInvoicesServiceItemCreateRequest.md#tojson)
- [toJson](ProformaInvoicesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceItemCreateRequest.md#tojsonstring)
- [equals](ProformaInvoicesServiceItemCreateRequest.md#equals-1)
- [fromBinary](ProformaInvoicesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceItemCreateRequest**(`data?`): [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\> |

#### Returns

[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1008](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L1008)

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

The family code as represented by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:978](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L978)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:971](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L971)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:964](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L964)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:950](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L950)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being supplied in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:957](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L957)

___

### proformaInvoiceId

• **proformaInvoiceId**: `bigint` = `protoInt64.zero`

Stores the proforma invoice ID

**`Generated`**

from field: uint64 proforma_invoice_id = 10;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:943](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L943)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:999](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L999)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1006](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L1006)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:992](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L992)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied to the client)

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:985](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L985)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:936](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L936)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L1015)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L1013)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceItemCreateRequest"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1014](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L1014)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1041](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L1041)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1029](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L1029)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1033](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L1033)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1037](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L1037)
