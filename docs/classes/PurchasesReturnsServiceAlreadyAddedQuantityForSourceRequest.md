[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest

# Class: PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest

Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id

**`Generated`**

from message Scailo.PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`\<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest**(`data?`): [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Overrides

Message\&lt;PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

src/purchases_returns.scailo_pb.ts:1392

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 3;

#### Defined in

src/purchases_returns.scailo_pb.ts:1390

___

### refFrom

• **refFrom**: [`PURCHASE_RETURN_REF_FROM`](../enums/PURCHASE_RETURN_REF_FROM.md) = `PURCHASE_RETURN_REF_FROM.PURCHASE_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PURCHASE_RETURN_REF_FROM ref_from = 1;

#### Defined in

src/purchases_returns.scailo_pb.ts:1376

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 2;

#### Defined in

src/purchases_returns.scailo_pb.ts:1383

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_returns.scailo_pb.ts:1399

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_returns.scailo_pb.ts:1397

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

src/purchases_returns.scailo_pb.ts:1398

## Methods

### clone

▸ **clone**(): [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_returns.scailo_pb.ts:1417

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:1405

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:1409

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:1413
