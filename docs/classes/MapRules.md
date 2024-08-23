[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / MapRules

# Class: MapRules

MapRules describe the constraints applied to `map` values

**`Generated`**

from message genesis_validate.MapRules

## Hierarchy

- `Message`\<[`MapRules`](MapRules.md)\>

  ↳ **`MapRules`**

## Table of contents

### Constructors

- [constructor](MapRules.md#constructor)

### Properties

- [ignoreEmpty](MapRules.md#ignoreempty)
- [keys](MapRules.md#keys)
- [maxPairs](MapRules.md#maxpairs)
- [minPairs](MapRules.md#minpairs)
- [noSparse](MapRules.md#nosparse)
- [values](MapRules.md#values)
- [fields](MapRules.md#fields)
- [runtime](MapRules.md#runtime)
- [typeName](MapRules.md#typename)

### Methods

- [clone](MapRules.md#clone)
- [equals](MapRules.md#equals)
- [fromBinary](MapRules.md#frombinary)
- [fromJson](MapRules.md#fromjson)
- [fromJsonString](MapRules.md#fromjsonstring)
- [getType](MapRules.md#gettype)
- [toBinary](MapRules.md#tobinary)
- [toJSON](MapRules.md#tojson)
- [toJson](MapRules.md#tojson-1)
- [toJsonString](MapRules.md#tojsonstring)
- [equals](MapRules.md#equals-1)
- [fromBinary](MapRules.md#frombinary-1)
- [fromJson](MapRules.md#fromjson-1)
- [fromJsonString](MapRules.md#fromjsonstring-1)

## Constructors

### constructor

• **new MapRules**(`data?`): [`MapRules`](MapRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MapRules`](MapRules.md)\> |

#### Returns

[`MapRules`](MapRules.md)

#### Overrides

Message\&lt;MapRules\&gt;.constructor

#### Defined in

src/genesis.validate.scailo_pb.ts:2266

## Properties

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 6;

#### Defined in

src/genesis.validate.scailo_pb.ts:2264

___

### keys

• `Optional` **keys**: [`FieldRules`](FieldRules.md)

Keys specifies the constraints to be applied to each key in the field.

**`Generated`**

from field: optional genesis_validate.FieldRules keys = 4;

#### Defined in

src/genesis.validate.scailo_pb.ts:2247

___

### maxPairs

• `Optional` **maxPairs**: `bigint`

MaxPairs specifies that this field must have the specified number of
KVs at a maximum

**`Generated`**

from field: optional uint64 max_pairs = 2;

#### Defined in

src/genesis.validate.scailo_pb.ts:2232

___

### minPairs

• `Optional` **minPairs**: `bigint`

MinPairs specifies that this field must have the specified number of
KVs at a minimum

**`Generated`**

from field: optional uint64 min_pairs = 1;

#### Defined in

src/genesis.validate.scailo_pb.ts:2224

___

### noSparse

• `Optional` **noSparse**: `boolean`

NoSparse specifies values in this field cannot be unset. This only
applies to map's with message value types.

**`Generated`**

from field: optional bool no_sparse = 3;

#### Defined in

src/genesis.validate.scailo_pb.ts:2240

___

### values

• `Optional` **values**: [`FieldRules`](FieldRules.md)

Values specifies the constraints to be applied to the value of each key
in the field. Message values will still have their validations evaluated
unless skip is specified here.

**`Generated`**

from field: optional genesis_validate.FieldRules values = 5;

#### Defined in

src/genesis.validate.scailo_pb.ts:2256

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/genesis.validate.scailo_pb.ts:2273

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

src/genesis.validate.scailo_pb.ts:2271

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.MapRules"``

#### Defined in

src/genesis.validate.scailo_pb.ts:2272

## Methods

### clone

▸ **clone**(): [`MapRules`](MapRules.md)

Create a deep copy.

#### Returns

[`MapRules`](MapRules.md)

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
| `other` | `undefined` \| ``null`` \| [`MapRules`](MapRules.md) \| `PlainMessage`\<[`MapRules`](MapRules.md)\> |

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

▸ **getType**(): `MessageType`\<[`MapRules`](MapRules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MapRules`](MapRules.md)\>

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
| `a` | `undefined` \| [`MapRules`](MapRules.md) \| `PlainMessage`\<[`MapRules`](MapRules.md)\> |
| `b` | `undefined` \| [`MapRules`](MapRules.md) \| `PlainMessage`\<[`MapRules`](MapRules.md)\> |

#### Returns

`boolean`

#### Defined in

src/genesis.validate.scailo_pb.ts:2294

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MapRules`](MapRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MapRules`](MapRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2282

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MapRules`](MapRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MapRules`](MapRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2286

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MapRules`](MapRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MapRules`](MapRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2290
