[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / BytesRules

# Class: BytesRules

BytesRules describe the constraints applied to `bytes` values

**`Generated`**

from message genesis_validate.BytesRules

## Hierarchy

- `Message`\<[`BytesRules`](BytesRules.md)\>

  ↳ **`BytesRules`**

## Table of contents

### Constructors

- [constructor](BytesRules.md#constructor)

### Properties

- [const](BytesRules.md#const)
- [contains](BytesRules.md#contains)
- [ignoreEmpty](BytesRules.md#ignoreempty)
- [in](BytesRules.md#in)
- [len](BytesRules.md#len)
- [maxLen](BytesRules.md#maxlen)
- [minLen](BytesRules.md#minlen)
- [notIn](BytesRules.md#notin)
- [pattern](BytesRules.md#pattern)
- [prefix](BytesRules.md#prefix)
- [suffix](BytesRules.md#suffix)
- [wellKnown](BytesRules.md#wellknown)
- [fields](BytesRules.md#fields)
- [runtime](BytesRules.md#runtime)
- [typeName](BytesRules.md#typename)

### Methods

- [clone](BytesRules.md#clone)
- [equals](BytesRules.md#equals)
- [fromBinary](BytesRules.md#frombinary)
- [fromJson](BytesRules.md#fromjson)
- [fromJsonString](BytesRules.md#fromjsonstring)
- [getType](BytesRules.md#gettype)
- [toBinary](BytesRules.md#tobinary)
- [toJSON](BytesRules.md#tojson)
- [toJson](BytesRules.md#tojson-1)
- [toJsonString](BytesRules.md#tojsonstring)
- [equals](BytesRules.md#equals-1)
- [fromBinary](BytesRules.md#frombinary-1)
- [fromJson](BytesRules.md#fromjson-1)
- [fromJsonString](BytesRules.md#fromjsonstring-1)

## Constructors

### constructor

• **new BytesRules**(`data?`): [`BytesRules`](BytesRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`BytesRules`](BytesRules.md)\> |

#### Returns

[`BytesRules`](BytesRules.md)

#### Overrides

Message\&lt;BytesRules\&gt;.constructor

#### Defined in

src/genesis.validate.scailo_pb.ts:1972

## Properties

### const

• `Optional` **const**: `Uint8Array`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional bytes const = 1;

#### Defined in

src/genesis.validate.scailo_pb.ts:1855

___

### contains

• `Optional` **contains**: `Uint8Array`

Contains specifies that this field must have the specified bytes
anywhere in the string.

**`Generated`**

from field: optional bytes contains = 7;

#### Defined in

src/genesis.validate.scailo_pb.ts:1911

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 14;

#### Defined in

src/genesis.validate.scailo_pb.ts:1970

___

### in

• **in**: `Uint8Array`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated bytes in = 8;

#### Defined in

src/genesis.validate.scailo_pb.ts:1919

___

### len

• `Optional` **len**: `bigint`

Len specifies that this field must be the specified number of bytes

**`Generated`**

from field: optional uint64 len = 13;

#### Defined in

src/genesis.validate.scailo_pb.ts:1862

___

### maxLen

• `Optional` **maxLen**: `bigint`

MaxLen specifies that this field must be the specified number of bytes
at a maximum

**`Generated`**

from field: optional uint64 max_len = 3;

#### Defined in

src/genesis.validate.scailo_pb.ts:1878

___

### minLen

• `Optional` **minLen**: `bigint`

MinLen specifies that this field must be the specified number of bytes
at a minimum

**`Generated`**

from field: optional uint64 min_len = 2;

#### Defined in

src/genesis.validate.scailo_pb.ts:1870

___

### notIn

• **notIn**: `Uint8Array`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated bytes not_in = 9;

#### Defined in

src/genesis.validate.scailo_pb.ts:1927

___

### pattern

• `Optional` **pattern**: `string`

Pattern specifes that this field must match against the specified
regular expression (RE2 syntax). The included expression should elide
any delimiters.

**`Generated`**

from field: optional string pattern = 4;

#### Defined in

src/genesis.validate.scailo_pb.ts:1887

___

### prefix

• `Optional` **prefix**: `Uint8Array`

Prefix specifies that this field must have the specified bytes at the
beginning of the string.

**`Generated`**

from field: optional bytes prefix = 5;

#### Defined in

src/genesis.validate.scailo_pb.ts:1895

___

### suffix

• `Optional` **suffix**: `Uint8Array`

Suffix specifies that this field must have the specified bytes at the
end of the string.

**`Generated`**

from field: optional bytes suffix = 6;

#### Defined in

src/genesis.validate.scailo_pb.ts:1903

___

### wellKnown

• **wellKnown**: \{ `case`: ``"ip"`` ; `value`: `boolean`  } \| \{ `case`: ``"ipv4"`` ; `value`: `boolean`  } \| \{ `case`: ``"ipv6"`` ; `value`: `boolean`  } \| \{ `case`: `undefined` ; `value?`: `undefined`  }

WellKnown rules provide advanced constraints against common byte
patterns

**`Generated`**

from oneof genesis_validate.BytesRules.well_known

#### Defined in

src/genesis.validate.scailo_pb.ts:1935

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/genesis.validate.scailo_pb.ts:1979

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

src/genesis.validate.scailo_pb.ts:1977

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.BytesRules"``

#### Defined in

src/genesis.validate.scailo_pb.ts:1978

## Methods

### clone

▸ **clone**(): [`BytesRules`](BytesRules.md)

Create a deep copy.

#### Returns

[`BytesRules`](BytesRules.md)

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
| `other` | `undefined` \| ``null`` \| [`BytesRules`](BytesRules.md) \| `PlainMessage`\<[`BytesRules`](BytesRules.md)\> |

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

▸ **getType**(): `MessageType`\<[`BytesRules`](BytesRules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`BytesRules`](BytesRules.md)\>

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
| `a` | `undefined` \| [`BytesRules`](BytesRules.md) \| `PlainMessage`\<[`BytesRules`](BytesRules.md)\> |
| `b` | `undefined` \| [`BytesRules`](BytesRules.md) \| `PlainMessage`\<[`BytesRules`](BytesRules.md)\> |

#### Returns

`boolean`

#### Defined in

src/genesis.validate.scailo_pb.ts:2008

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BytesRules`](BytesRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`BytesRules`](BytesRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:1996

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BytesRules`](BytesRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BytesRules`](BytesRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2000

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BytesRules`](BytesRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BytesRules`](BytesRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2004
