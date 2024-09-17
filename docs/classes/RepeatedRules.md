[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / RepeatedRules

# Class: RepeatedRules

RepeatedRules describe the constraints applied to `repeated` values

**`Generated`**

from message genesis_validate.RepeatedRules

## Hierarchy

- `Message`\<[`RepeatedRules`](RepeatedRules.md)\>

  ↳ **`RepeatedRules`**

## Table of contents

### Constructors

- [constructor](RepeatedRules.md#constructor)

### Properties

- [ignoreEmpty](RepeatedRules.md#ignoreempty)
- [items](RepeatedRules.md#items)
- [maxItems](RepeatedRules.md#maxitems)
- [minItems](RepeatedRules.md#minitems)
- [unique](RepeatedRules.md#unique)
- [fields](RepeatedRules.md#fields)
- [runtime](RepeatedRules.md#runtime)
- [typeName](RepeatedRules.md#typename)

### Methods

- [clone](RepeatedRules.md#clone)
- [equals](RepeatedRules.md#equals)
- [fromBinary](RepeatedRules.md#frombinary)
- [fromJson](RepeatedRules.md#fromjson)
- [fromJsonString](RepeatedRules.md#fromjsonstring)
- [getType](RepeatedRules.md#gettype)
- [toBinary](RepeatedRules.md#tobinary)
- [toJSON](RepeatedRules.md#tojson)
- [toJson](RepeatedRules.md#tojson-1)
- [toJsonString](RepeatedRules.md#tojsonstring)
- [equals](RepeatedRules.md#equals-1)
- [fromBinary](RepeatedRules.md#frombinary-1)
- [fromJson](RepeatedRules.md#fromjson-1)
- [fromJsonString](RepeatedRules.md#fromjsonstring-1)

## Constructors

### constructor

• **new RepeatedRules**(`data?`): [`RepeatedRules`](RepeatedRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RepeatedRules`](RepeatedRules.md)\> |

#### Returns

[`RepeatedRules`](RepeatedRules.md)

#### Overrides

Message\&lt;RepeatedRules\&gt;.constructor

#### Defined in

src/genesis.validate.scailo_pb.ts:2180

## Properties

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 5;

#### Defined in

src/genesis.validate.scailo_pb.ts:2178

___

### items

• `Optional` **items**: [`FieldRules`](FieldRules.md)

Items specifies the contraints to be applied to each item in the field.
Repeated message fields will still execute validation against each item
unless skip is specified here.

**`Generated`**

from field: optional genesis_validate.FieldRules items = 4;

#### Defined in

src/genesis.validate.scailo_pb.ts:2170

___

### maxItems

• `Optional` **maxItems**: `bigint`

MaxItems specifies that this field must have the specified number of
items at a maximum

**`Generated`**

from field: optional uint64 max_items = 2;

#### Defined in

src/genesis.validate.scailo_pb.ts:2152

___

### minItems

• `Optional` **minItems**: `bigint`

MinItems specifies that this field must have the specified number of
items at a minimum

**`Generated`**

from field: optional uint64 min_items = 1;

#### Defined in

src/genesis.validate.scailo_pb.ts:2144

___

### unique

• `Optional` **unique**: `boolean`

Unique specifies that all elements in this field must be unique. This
contraint is only applicable to scalar and enum types (messages are not
supported).

**`Generated`**

from field: optional bool unique = 3;

#### Defined in

src/genesis.validate.scailo_pb.ts:2161

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/genesis.validate.scailo_pb.ts:2187

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

src/genesis.validate.scailo_pb.ts:2185

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.RepeatedRules"``

#### Defined in

src/genesis.validate.scailo_pb.ts:2186

## Methods

### clone

▸ **clone**(): [`RepeatedRules`](RepeatedRules.md)

Create a deep copy.

#### Returns

[`RepeatedRules`](RepeatedRules.md)

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
| `other` | `undefined` \| ``null`` \| [`RepeatedRules`](RepeatedRules.md) \| `PlainMessage`\<[`RepeatedRules`](RepeatedRules.md)\> |

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

▸ **getType**(): `MessageType`\<[`RepeatedRules`](RepeatedRules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RepeatedRules`](RepeatedRules.md)\>

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
| `a` | `undefined` \| [`RepeatedRules`](RepeatedRules.md) \| `PlainMessage`\<[`RepeatedRules`](RepeatedRules.md)\> |
| `b` | `undefined` \| [`RepeatedRules`](RepeatedRules.md) \| `PlainMessage`\<[`RepeatedRules`](RepeatedRules.md)\> |

#### Returns

`boolean`

#### Defined in

src/genesis.validate.scailo_pb.ts:2207

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RepeatedRules`](RepeatedRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RepeatedRules`](RepeatedRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2195

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RepeatedRules`](RepeatedRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RepeatedRules`](RepeatedRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2199

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RepeatedRules`](RepeatedRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RepeatedRules`](RepeatedRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2203
