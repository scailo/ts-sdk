[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceUnitConversionCreateRequest

# Class: FamiliesServiceUnitConversionCreateRequest

Describes the parameters necessary to create a family unit conversion

**`Generated`**

from message Scailo.FamiliesServiceUnitConversionCreateRequest

## Hierarchy

- `Message`\<[`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)\>

  ↳ **`FamiliesServiceUnitConversionCreateRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceUnitConversionCreateRequest.md#constructor)

### Properties

- [divisor](FamiliesServiceUnitConversionCreateRequest.md#divisor)
- [factor](FamiliesServiceUnitConversionCreateRequest.md#factor)
- [familyId](FamiliesServiceUnitConversionCreateRequest.md#familyid)
- [uomId](FamiliesServiceUnitConversionCreateRequest.md#uomid)
- [userComment](FamiliesServiceUnitConversionCreateRequest.md#usercomment)
- [fields](FamiliesServiceUnitConversionCreateRequest.md#fields)
- [runtime](FamiliesServiceUnitConversionCreateRequest.md#runtime)
- [typeName](FamiliesServiceUnitConversionCreateRequest.md#typename)

### Methods

- [clone](FamiliesServiceUnitConversionCreateRequest.md#clone)
- [equals](FamiliesServiceUnitConversionCreateRequest.md#equals)
- [fromBinary](FamiliesServiceUnitConversionCreateRequest.md#frombinary)
- [fromJson](FamiliesServiceUnitConversionCreateRequest.md#fromjson)
- [fromJsonString](FamiliesServiceUnitConversionCreateRequest.md#fromjsonstring)
- [getType](FamiliesServiceUnitConversionCreateRequest.md#gettype)
- [toBinary](FamiliesServiceUnitConversionCreateRequest.md#tobinary)
- [toJSON](FamiliesServiceUnitConversionCreateRequest.md#tojson)
- [toJson](FamiliesServiceUnitConversionCreateRequest.md#tojson-1)
- [toJsonString](FamiliesServiceUnitConversionCreateRequest.md#tojsonstring)
- [equals](FamiliesServiceUnitConversionCreateRequest.md#equals-1)
- [fromBinary](FamiliesServiceUnitConversionCreateRequest.md#frombinary-1)
- [fromJson](FamiliesServiceUnitConversionCreateRequest.md#fromjson-1)
- [fromJsonString](FamiliesServiceUnitConversionCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceUnitConversionCreateRequest**(`data?`): [`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)\> |

#### Returns

[`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)

#### Overrides

Message\&lt;FamiliesServiceUnitConversionCreateRequest\&gt;.constructor

#### Defined in

src/families.scailo_pb.ts:2017

## Properties

### divisor

• **divisor**: `bigint` = `protoInt64.zero`

Stores the divisor

**`Generated`**

from field: uint64 divisor = 13;

#### Defined in

src/families.scailo_pb.ts:2015

___

### factor

• **factor**: `bigint` = `protoInt64.zero`

Stores the factor

**`Generated`**

from field: uint64 factor = 12;

#### Defined in

src/families.scailo_pb.ts:2008

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

src/families.scailo_pb.ts:1994

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the unit of material ID

**`Generated`**

from field: uint64 uom_id = 11;

#### Defined in

src/families.scailo_pb.ts:2001

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/families.scailo_pb.ts:1987

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/families.scailo_pb.ts:2024

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/families.scailo_pb.ts:2022

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceUnitConversionCreateRequest"``

#### Defined in

src/families.scailo_pb.ts:2023

## Methods

### clone

▸ **clone**(): [`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)

Create a deep copy.

#### Returns

[`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)\> |
| `b` | `undefined` \| [`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/families.scailo_pb.ts:2044

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)

#### Defined in

src/families.scailo_pb.ts:2032

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)

#### Defined in

src/families.scailo_pb.ts:2036

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceUnitConversionCreateRequest`](FamiliesServiceUnitConversionCreateRequest.md)

#### Defined in

src/families.scailo_pb.ts:2040
