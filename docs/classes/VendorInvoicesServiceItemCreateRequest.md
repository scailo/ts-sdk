[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceItemCreateRequest

# Class: VendorInvoicesServiceItemCreateRequest

Describes the parameters required to add an item to a vendor invoice

**`Generated`**

from message Scailo.VendorInvoicesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)\>

  ↳ **`VendorInvoicesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceItemCreateRequest.md#constructor)

### Properties

- [familyId](VendorInvoicesServiceItemCreateRequest.md#familyid)
- [internalQuantity](VendorInvoicesServiceItemCreateRequest.md#internalquantity)
- [roundOff](VendorInvoicesServiceItemCreateRequest.md#roundoff)
- [specifications](VendorInvoicesServiceItemCreateRequest.md#specifications)
- [taxGroupId](VendorInvoicesServiceItemCreateRequest.md#taxgroupid)
- [userComment](VendorInvoicesServiceItemCreateRequest.md#usercomment)
- [vendorInvoiceId](VendorInvoicesServiceItemCreateRequest.md#vendorinvoiceid)
- [vendorQuantity](VendorInvoicesServiceItemCreateRequest.md#vendorquantity)
- [vendorUnitPrice](VendorInvoicesServiceItemCreateRequest.md#vendorunitprice)
- [vendorUomId](VendorInvoicesServiceItemCreateRequest.md#vendoruomid)
- [fields](VendorInvoicesServiceItemCreateRequest.md#fields)
- [runtime](VendorInvoicesServiceItemCreateRequest.md#runtime)
- [typeName](VendorInvoicesServiceItemCreateRequest.md#typename)

### Methods

- [clone](VendorInvoicesServiceItemCreateRequest.md#clone)
- [equals](VendorInvoicesServiceItemCreateRequest.md#equals)
- [fromBinary](VendorInvoicesServiceItemCreateRequest.md#frombinary)
- [fromJson](VendorInvoicesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](VendorInvoicesServiceItemCreateRequest.md#fromjsonstring)
- [getType](VendorInvoicesServiceItemCreateRequest.md#gettype)
- [toBinary](VendorInvoicesServiceItemCreateRequest.md#tobinary)
- [toJSON](VendorInvoicesServiceItemCreateRequest.md#tojson)
- [toJson](VendorInvoicesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](VendorInvoicesServiceItemCreateRequest.md#tojsonstring)
- [equals](VendorInvoicesServiceItemCreateRequest.md#equals-1)
- [fromBinary](VendorInvoicesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](VendorInvoicesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceItemCreateRequest**(`data?`): [`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)\> |

#### Returns

[`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;VendorInvoicesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L966)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L915)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:922](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L922)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:957](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L957)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 18;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:964](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L964)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:950](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L950)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:901](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L901)

___

### vendorInvoiceId

• **vendorInvoiceId**: `bigint` = `protoInt64.zero`

Stores the vendor invoice ID

**`Generated`**

from field: uint64 vendor_invoice_id = 10;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:908](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L908)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:936](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L936)

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:943](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L943)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:929](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L929)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:973](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L973)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:971](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L971)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceItemCreateRequest"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:972](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L972)

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:998](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L998)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:986](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L986)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:990](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L990)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceItemCreateRequest`](VendorInvoicesServiceItemCreateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:994](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L994)
