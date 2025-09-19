[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsFamiliesServiceItemCreateRequest

# Class: EquationsFamiliesServiceItemCreateRequest

Describes the parameters required to add an item to a equation family

**`Generated`**

from message Scailo.EquationsFamiliesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)\>

  ↳ **`EquationsFamiliesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsFamiliesServiceItemCreateRequest.md#constructor)

### Properties

- [equationId](EquationsFamiliesServiceItemCreateRequest.md#equationid)
- [familyId](EquationsFamiliesServiceItemCreateRequest.md#familyid)
- [quantity](EquationsFamiliesServiceItemCreateRequest.md#quantity)
- [specifications](EquationsFamiliesServiceItemCreateRequest.md#specifications)
- [unitPrice](EquationsFamiliesServiceItemCreateRequest.md#unitprice)
- [userComment](EquationsFamiliesServiceItemCreateRequest.md#usercomment)
- [fields](EquationsFamiliesServiceItemCreateRequest.md#fields)
- [runtime](EquationsFamiliesServiceItemCreateRequest.md#runtime)
- [typeName](EquationsFamiliesServiceItemCreateRequest.md#typename)

### Methods

- [clone](EquationsFamiliesServiceItemCreateRequest.md#clone)
- [equals](EquationsFamiliesServiceItemCreateRequest.md#equals)
- [fromBinary](EquationsFamiliesServiceItemCreateRequest.md#frombinary)
- [fromJson](EquationsFamiliesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](EquationsFamiliesServiceItemCreateRequest.md#fromjsonstring)
- [getType](EquationsFamiliesServiceItemCreateRequest.md#gettype)
- [toBinary](EquationsFamiliesServiceItemCreateRequest.md#tobinary)
- [toJSON](EquationsFamiliesServiceItemCreateRequest.md#tojson)
- [toJson](EquationsFamiliesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](EquationsFamiliesServiceItemCreateRequest.md#tojsonstring)
- [equals](EquationsFamiliesServiceItemCreateRequest.md#equals-1)
- [fromBinary](EquationsFamiliesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](EquationsFamiliesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](EquationsFamiliesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsFamiliesServiceItemCreateRequest**(`data?`): [`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)\> |

#### Returns

[`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;EquationsFamiliesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/equations_families.scailo_pb.ts:554](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L554)

## Properties

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

Stores the ID of the equation family

**`Generated`**

from field: uint64 equation_id = 10;

#### Defined in

[src/equations_families.scailo_pb.ts:524](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L524)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that the equation depends upon

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/equations_families.scailo_pb.ts:531](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L531)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the associated family to be used as the multiplier

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

[src/equations_families.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L538)

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/equations_families.scailo_pb.ts:552](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L552)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: uint64 unit_price = 13;

#### Defined in

[src/equations_families.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L545)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/equations_families.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L517)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_families.scailo_pb.ts:561](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L561)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_families.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L559)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsFamiliesServiceItemCreateRequest"``

#### Defined in

[src/equations_families.scailo_pb.ts:560](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L560)

## Methods

### clone

▸ **clone**(): [`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_families.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L582)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:570](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L570)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:574](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L574)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceItemCreateRequest`](EquationsFamiliesServiceItemCreateRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:578](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L578)
