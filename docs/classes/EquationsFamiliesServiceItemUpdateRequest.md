[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsFamiliesServiceItemUpdateRequest

# Class: EquationsFamiliesServiceItemUpdateRequest

Describes the parameters required to update an item in a equation family

**`Generated`**

from message Scailo.EquationsFamiliesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)\>

  ↳ **`EquationsFamiliesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsFamiliesServiceItemUpdateRequest.md#constructor)

### Properties

- [id](EquationsFamiliesServiceItemUpdateRequest.md#id)
- [quantity](EquationsFamiliesServiceItemUpdateRequest.md#quantity)
- [specifications](EquationsFamiliesServiceItemUpdateRequest.md#specifications)
- [unitPrice](EquationsFamiliesServiceItemUpdateRequest.md#unitprice)
- [userComment](EquationsFamiliesServiceItemUpdateRequest.md#usercomment)
- [fields](EquationsFamiliesServiceItemUpdateRequest.md#fields)
- [runtime](EquationsFamiliesServiceItemUpdateRequest.md#runtime)
- [typeName](EquationsFamiliesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](EquationsFamiliesServiceItemUpdateRequest.md#clone)
- [equals](EquationsFamiliesServiceItemUpdateRequest.md#equals)
- [fromBinary](EquationsFamiliesServiceItemUpdateRequest.md#frombinary)
- [fromJson](EquationsFamiliesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](EquationsFamiliesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](EquationsFamiliesServiceItemUpdateRequest.md#gettype)
- [toBinary](EquationsFamiliesServiceItemUpdateRequest.md#tobinary)
- [toJSON](EquationsFamiliesServiceItemUpdateRequest.md#tojson)
- [toJson](EquationsFamiliesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](EquationsFamiliesServiceItemUpdateRequest.md#tojsonstring)
- [equals](EquationsFamiliesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](EquationsFamiliesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](EquationsFamiliesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](EquationsFamiliesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsFamiliesServiceItemUpdateRequest**(`data?`): [`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)\> |

#### Returns

[`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;EquationsFamiliesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/equations_families.scailo_pb.ts:674](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L674)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/equations_families.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L651)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the associated family to be used as the multiplier

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

[src/equations_families.scailo_pb.ts:658](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L658)

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/equations_families.scailo_pb.ts:672](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L672)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: uint64 unit_price = 13;

#### Defined in

[src/equations_families.scailo_pb.ts:665](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L665)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/equations_families.scailo_pb.ts:644](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L644)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_families.scailo_pb.ts:681](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L681)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_families.scailo_pb.ts:679](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L679)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsFamiliesServiceItemUpdateRequest"``

#### Defined in

[src/equations_families.scailo_pb.ts:680](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L680)

## Methods

### clone

▸ **clone**(): [`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_families.scailo_pb.ts:701](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L701)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L689)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:693](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L693)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceItemUpdateRequest`](EquationsFamiliesServiceItemUpdateRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L697)
