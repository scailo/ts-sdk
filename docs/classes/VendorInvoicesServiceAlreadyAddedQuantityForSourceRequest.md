[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest

# Class: VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest

Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id

**`Generated`**

from message Scailo.VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`\<[`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest**(`data?`): [`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

[`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Overrides

Message\&lt;VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:1390

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 3;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1388

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1374

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 2;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1381

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1397

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1395

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:1396

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1415

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1403

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1407

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest`](VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1411
