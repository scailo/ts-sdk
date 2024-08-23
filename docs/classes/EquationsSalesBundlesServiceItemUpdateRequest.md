[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsSalesBundlesServiceItemUpdateRequest

# Class: EquationsSalesBundlesServiceItemUpdateRequest

Describes the parameters required to update an item in a equation sales bundle

**`Generated`**

from message Scailo.EquationsSalesBundlesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)\>

  ↳ **`EquationsSalesBundlesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsSalesBundlesServiceItemUpdateRequest.md#constructor)

### Properties

- [id](EquationsSalesBundlesServiceItemUpdateRequest.md#id)
- [quantity](EquationsSalesBundlesServiceItemUpdateRequest.md#quantity)
- [specifications](EquationsSalesBundlesServiceItemUpdateRequest.md#specifications)
- [unitPrice](EquationsSalesBundlesServiceItemUpdateRequest.md#unitprice)
- [userComment](EquationsSalesBundlesServiceItemUpdateRequest.md#usercomment)
- [fields](EquationsSalesBundlesServiceItemUpdateRequest.md#fields)
- [runtime](EquationsSalesBundlesServiceItemUpdateRequest.md#runtime)
- [typeName](EquationsSalesBundlesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](EquationsSalesBundlesServiceItemUpdateRequest.md#clone)
- [equals](EquationsSalesBundlesServiceItemUpdateRequest.md#equals)
- [fromBinary](EquationsSalesBundlesServiceItemUpdateRequest.md#frombinary)
- [fromJson](EquationsSalesBundlesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](EquationsSalesBundlesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](EquationsSalesBundlesServiceItemUpdateRequest.md#gettype)
- [toBinary](EquationsSalesBundlesServiceItemUpdateRequest.md#tobinary)
- [toJSON](EquationsSalesBundlesServiceItemUpdateRequest.md#tojson)
- [toJson](EquationsSalesBundlesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](EquationsSalesBundlesServiceItemUpdateRequest.md#tojsonstring)
- [equals](EquationsSalesBundlesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](EquationsSalesBundlesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](EquationsSalesBundlesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](EquationsSalesBundlesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsSalesBundlesServiceItemUpdateRequest**(`data?`): [`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)\> |

#### Returns

[`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;EquationsSalesBundlesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:629

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:606

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the associated family to be used as the multiplier

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:613

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:627

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: uint64 unit_price = 13;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:620

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:599

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:636

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:634

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsSalesBundlesServiceItemUpdateRequest"``

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:635

## Methods

### clone

▸ **clone**(): [`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:656

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:644

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:648

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceItemUpdateRequest`](EquationsSalesBundlesServiceItemUpdateRequest.md)

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:652
